'use server';

import { actionClient } from '@/lib/safe-action';
import { db } from '@/db';
import { categories } from '@/db/schema';
import { formSchema } from './schemas';

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
