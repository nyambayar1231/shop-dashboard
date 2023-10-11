import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js',
};

export default function Page() {
  return (
    <main className="flex justify-between items-center p-4 lg:py-6">
      <Link href="/">Logo</Link>
      <Link href="dashboard">Login</Link>
    </main>
  );
}
