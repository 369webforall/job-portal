import {
  DeletedObjectJSON,
  UserJSON,
  OrganizationJSON,
} from "@clerk/nextjs/server";
import { Inngest, EventSchemas } from "inngest";

type ClerkWebhookData<T> = {
  data: {
    data: T;
    raw: string;
    headers: Record<string, string>;
  };
};

type Events = {
  "clerk/user.created": ClerkWebhookData<UserJSON>;
  "clerk/user.updated": ClerkWebhookData<UserJSON>;
  "clerk/user.deleted": ClerkWebhookData<DeletedObjectJSON>;
  "clerk/organization.created": ClerkWebhookData<OrganizationJSON>;
  "clerk/organization.updated": ClerkWebhookData<OrganizationJSON>;
  "clerk/organization.deleted": ClerkWebhookData<DeletedObjectJSON>;
};

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "rjob",
  schemas: new EventSchemas().fromRecord<Events>(),
});
