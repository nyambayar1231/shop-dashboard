'use server';

import { actionClient } from '@/lib/safe-action';
import { db } from '@/db';
import { categories } from '@/db/schema';
import { formSchema, editFormSchema, deleteFormSchema } from './schemas';
import { eq } from 'drizzle-orm';

export const addCategory = actionClient
  .schema(formSchema)
  .action(async ({ parsedInput }) => {
    try {
      const [result] = await db
        .insert(categories)
        .values(parsedInput)
        .returning();

      return { success: true, data: result };
    } catch (error) {
      return {
        error: true,
        message: (error as Error).message || 'Failed to add category',
      };
    }
  });

export const editCategory = actionClient
  .schema(editFormSchema)
  .action(async ({ parsedInput }) => {
    const { id, ...updatedFields } = parsedInput;

    try {
      const [result] = await db
        .update(categories)
        .set(updatedFields)
        .where(eq(categories.id, id))
        .returning();

      return { success: true, data: result };
    } catch (error) {
      return {
        error: true,
        message: (error as Error).message || 'Failed to edit category',
      };
    }
  });

export const deleteCategory = actionClient
  .schema(deleteFormSchema)
  .action(async ({ parsedInput }) => {
    const { id } = parsedInput;
    try {
      const result = await db
        .delete(categories)
        .where(eq(categories.id, id))
        .returning();
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      return {
        error: true,
        message: (error as Error).message || 'Failed to delete category',
      };
    }
  });
