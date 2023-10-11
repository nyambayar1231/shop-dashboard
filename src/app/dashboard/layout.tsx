import Navbar from '../components/layout/navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-[auto_1fr]">
      <Navbar />
      {children}
    </section>
  );
}
