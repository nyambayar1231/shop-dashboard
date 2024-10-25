// hooks/use-action-toast.ts
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

interface ActionToastOptions {
  successMessage: string;
  errorMessage?: string;
  redirectPath?: string;
}

interface ActionResult {
  success?: boolean;
  error?: boolean;
  message?: string;
}

export function useActionToast() {
  const { toast } = useToast();
  const router = useRouter();

  const showActionToast = async (
    result: ActionResult | undefined,
    options: ActionToastOptions
  ) => {
    if (result?.success) {
      toast({
        title: 'Амжилттай',
        description: options.successMessage,
      });

      if (options.redirectPath) {
        router.push(options.redirectPath);
      }
    } else if (result?.error) {
      toast({
        variant: 'destructive',
        title: 'Алдаа гарлаа',
        description:
          options.errorMessage || 'Үйлдэл гүйцэтгэх үед алдаа гарлаа',
      });
    }
  };

  return { showActionToast };
}
