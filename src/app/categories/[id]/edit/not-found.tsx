import React from 'react';
import Link from 'next/link';
import { FolderX, PlusCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CategoryNotFound() {
  return (
    <div className="flex flex-coxql items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <FolderX className="mx-auto h-24 w-24 text-yellow-500 mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ангилал олдсонгүй
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Уучлаарай! Таны хайсан ангилал байхгүй байна.
        </p>
        <div className="space-y-4">
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild>
              <Link href="/categories">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ангилалууд руу буцах
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/categories/create">
                <PlusCircle className="mr-2 h-4 w-4" />
                Шинээр ангилал үүсгэх
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
