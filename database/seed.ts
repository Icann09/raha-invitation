// database/seed.ts

import "dotenv/config";

import { db } from "./drizzle";
import { wishes } from "./schema";

async function seed() {
  console.log("🌱 Seeding wishes table...");

  try {
    await db.insert(wishes).values([
      {
        name: "Andi Pratama",
        invitationId: 1,
        message:
          "Selamat hidup baru. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah 🤍, Nice",
      },

      {
        name: "Siti Rahma",
        invitationId: 1,
        message:
          "Happy wedding untuk Dillo & Alisyah. Semoga selalu bahagia dan diberkahi.",
      },

      {
        name: "Budi Santoso",
        invitationId: 1,
        message:
          "Selamat atas pernikahannya. Semoga cinta kalian selalu tumbuh setiap hari ✨",
      },

      {
        name: "Rina Maharani",
        invitationId: 1,
        message:
          "Barakallahu lakuma wa baraka alaikuma ❤️",
      },

      {
        name: "Fajar Nugraha",
        invitationId: 1,
        message:
          "Semoga lancar sampai hari H dan menjadi keluarga harmonis.",
      },
    ]);

    console.log("✅ Wishes seeded successfully!");
  } catch (error) {
    console.error("❌ Seed failed:");
    console.error(error);
  }

  process.exit(0);
}

seed();