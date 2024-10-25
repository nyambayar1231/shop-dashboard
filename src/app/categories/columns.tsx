'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SelectCategory } from '@/db/schema';
import Link from 'next/link';
import { deleteCategory } from './data/actions';
import { useAction } from 'next-safe-action/hooks';
import { useActionToast } from '@/hooks/use-action-toast';

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
  {
    id: 'actions',
    cell: ({ row }) => {
      const category = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link
                href={`/categories/${category.id}/edit`}
                className="flex items-center gap-2"
              >
                <Edit className="h-4 w-4" />
                <span>Ангилал засах</span>
              </Link>
            </DropdownMenuItem>
            <DeleteMenuItem category={category} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function DeleteMenuItem({ category }: { category: SelectCategory }) {
  const { executeAsync, isPending } = useAction(deleteCategory);
  const { showActionToast } = useActionToast();

  const handleDelete = async () => {
    const result = await executeAsync({
      id: category.id,
    });

    showActionToast(result?.data, {
      successMessage: 'Ангилал амжилттай устгагдлаа',
      redirectPath: '/categories',
    });
  };

  return (
    <DropdownMenuItem
      className="text-destructive focus:text-destructive cursor-pointer"
      onClick={handleDelete}
      disabled={isPending}
    >
      <div className="flex items-center gap-2">
        <Trash2 className="h-4 w-4" />
        <span>Ангилал устгах</span>
      </div>
    </DropdownMenuItem>
  );
}
