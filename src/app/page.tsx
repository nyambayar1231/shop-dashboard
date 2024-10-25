import { SidebarInset } from '@/components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb';

export default function Home() {
  return (
    <SidebarInset>
      <HomeBreadcrumb />
    </SidebarInset>
  );
}

function HomeBreadcrumb() {
  return (
    <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Нүүр</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
