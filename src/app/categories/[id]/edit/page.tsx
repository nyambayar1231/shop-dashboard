import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { SidebarInset } from '@/components/ui/sidebar';

import { Metadata } from 'next';
import { fetchCategory } from '../../data';
import NotFound from './not-found';
import EditCategoryForm from './edit-form';

export const metadata: Metadata = {
  title: 'Edit Category',
};

type Params = Promise<{ id: string }>;

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const category = await fetchCategory(id);

  if (!category) {
    return <NotFound />;
  }

  return (
    <SidebarInset>
      <CategoryEditBreadcrumb />
      <EditCategoryForm category={category} />
    </SidebarInset>
  );
}

function CategoryEditBreadcrumb() {
  return (
    <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 px-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/">Нүүр</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbLink href="/categories">Ангилалууд</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Ангилал засах</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
