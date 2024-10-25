DROP INDEX IF EXISTS "categories_name_unique";--> statement-breakpoint
ALTER TABLE `categories` ALTER COLUMN "created_at" TO "created_at" integer NOT NULL DEFAULT (current_timestamp);--> statement-breakpoint
CREATE UNIQUE INDEX `categories_name_unique` ON `categories` (`name`);