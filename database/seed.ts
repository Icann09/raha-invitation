import "dotenv/config";

import { db } from "./drizzle";
import { wishes } from "./schema";

async function seed() {
  try {
    console.log("🌱 Seeding wishes table...");

    await db.insert(wishes).values([
      {
        name: "Andi Pratama",
        invitationId: 1,
        message:
          "Selamat hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah 🤍",
        attendance: "HADIR",
      },

      {
        name: "Siti Rahma",
        invitationId: 1,
        message:
          "Happy wedding untuk kalian berdua. Semoga selalu bahagia ✨",
        attendance: "HADIR",
      },

      {
        name: "Budi Santoso",
        invitationId: 1,
        message:
          "Semoga cinta kalian selalu tumbuh setiap hari ❤️",
        attendance: "TIDAK_HADIR",
      },
    ]);

    console.log("✅ Wishes seeded successfully");
  } catch (error) {
    console.error("❌ Seed failed:");
    console.error(error);
  }
}

seed();