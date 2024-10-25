import { db } from '@/db';
import { categories } from '@/db/schema';

export async function fetchCategories() {
  const result = await db.select().from(categories);
  return result;
}
