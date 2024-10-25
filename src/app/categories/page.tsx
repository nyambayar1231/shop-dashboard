import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

import { SidebarInset } from '@/components/ui/sidebar';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { fetchCategories } from './data';
import { Input } from '@/components/ui/input';
import { DataTable } from './data-table';
import { columns } from './columns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Ангилал',
  description: 'Бараа бүтээгдэхүүний ангилал',
};

export default async function CategoriesPage() {
  const data = await fetchCategories();

  return (
    <SidebarInset>
      <CategoryBreadcrumb />
      <main>
        <div className="flex justify-between">
          <div>
            <SearchCategory />
          </div>
          <div className="flex justify-end flex-1 items-center gap-2">
            <Link href="/categories/create">
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Ангилал нэмэх
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <Card className="mt-10 border-none">
          <CardHeader>
            <CardTitle>Ангилалууд</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </main>
    </SidebarInset>
  );
}

function SearchCategory() {
  return <Input placeholder="Ангилал хайх..." className="max-w-sm" />;
}

function CategoryBreadcrumb() {
  return (
    <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/">Нүүр</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Аниглалиуд</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
