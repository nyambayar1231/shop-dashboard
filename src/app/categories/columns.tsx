'use client';

import { ColumnDef } from '@tanstack/react-table';
import { SelectCategory } from '@/db/schema';

export const columns: ColumnDef<SelectCategory>[] = [
  {
    accessorKey: 'name',
    header: 'Нэр',
  },
  {
    accessorKey: 'description',
    header: 'Тайлбар',
  },
  {
    accessorKey: 'createdAt',
    header: 'Үүссэн огноо',
  },
];
