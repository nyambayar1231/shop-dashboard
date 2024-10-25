import { db } from '@/db';
import { eq } from 'drizzle-orm';
import { categories } from '@/db/schema';

export async function fetchCategories() {
  return await db.select().from(categories);
}

export async function fetchCategory(id: string) {
  const result = await db
    .select()
    .from(categories)
    .where(eq(categories.id, Number(id)))
    .limit(1);

  return result.length > 0 ? result[0] : null;
}
