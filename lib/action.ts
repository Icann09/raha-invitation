"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/database/drizzle";
import { wishes } from "@/database/schema";
import { desc, eq } from "drizzle-orm";

export async function submitWish(
  prevState: {
    success: boolean;
    message: string;
  },

  formData: FormData
) {
  try {
    // =========================
    // GET FORM DATA
    // =========================

    const name = formData.get("name") as string;

    const message = formData.get("message") as string;

    const attendance = formData.get(
      "attendance"
    ) as "HADIR" | "TIDAK_HADIR";

    // invitation id bisa dynamic nanti
    const invitationId = 1;

    // =========================
    // VALIDATION
    // =========================

    if (!name || !message || !attendance) {
      return {
        success: false,
        message: "Semua field wajib diisi.",
      };
    }

    // =========================
    // INSERT DATABASE
    // =========================

    await db.insert(wishes).values({
      name,
      message,
      attendance,
      invitationId,
    });

    // =========================
    // REVALIDATE
    // =========================

    revalidatePath("/invitation/luxury02");

    return {
      success: true,
      message: "Ucapan berhasil dikirim ✨",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Terjadi kesalahan server.",
    };
  }
}


export async function getWishes(
  invitationId: number
) {
  try {
    const data = await db.query.wishes.findMany({
      where: eq(
        wishes.invitationId,
        invitationId
      ),

      orderBy: [
        desc(wishes.createdAt),
      ],
    });

    return data;
  } catch (error) {
    console.error(error);

    return [];
  }
}