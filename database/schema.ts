import {
  integer,
  text,
  varchar,
  pgTable,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";

export const wishes = pgTable("wishes", {
  id: uuid("id")
    .primaryKey()
    .defaultRandom(),

  name: varchar("name", {
    length: 255,
  }).notNull(),

  invitationId: integer("invitation_id")
    .notNull(),

  message: text("message")
    .notNull(),

  attendance: varchar("attendance", {
    length: 20,
  }).notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});