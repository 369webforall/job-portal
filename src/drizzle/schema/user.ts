import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";

import { relations } from "drizzle-orm";
import { UserResumeTable } from "./userResume";
import { UserNotificationSettingsTable } from "./userNotificationSettings";
import { OrganizationUserSettingsTable } from "./organizationUserSettings";
import { uuid } from "drizzle-orm/pg-core";

export const UserTable = pgTable("users", {
  id: uuid().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt,
  updatedAt,
});

export const userRelations = relations(UserTable, ({ one, many }) => ({
  notificationSettings: one(UserNotificationSettingsTable),
  resume: one(UserResumeTable),
  organizationUserSettings: many(OrganizationUserSettingsTable),
}));
