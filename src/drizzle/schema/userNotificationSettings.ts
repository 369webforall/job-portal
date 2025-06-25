import { boolean, pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { UserTable } from "./user";
import { relations } from "drizzle-orm";
import { uuid } from "drizzle-orm/pg-core";
export const UserNotificationSettingsTable = pgTable(
  "user_notification_settings",
  {
    userId: uuid()
      .primaryKey()
      .references(() => UserTable.id),
    newJobEmailNotifications: boolean().notNull().default(false),
    aiPrompt: varchar(),
    createdAt,
    updatedAt,
  }
);

export const userNotificationSettingsRelations = relations(
  UserNotificationSettingsTable,
  ({ one }) => ({
    user: one(UserTable, {
      fields: [UserNotificationSettingsTable.userId],
      references: [UserTable.id],
    }),
  })
);
