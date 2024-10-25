'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { addCategory } from '../actions';
import { formSchema } from '../schemas';
import { useToast } from '@/hooks/use-toast';
import { useAction } from 'next-safe-action/hooks';
import { useRouter } from 'next/navigation';

type FormValues = z.infer<typeof formSchema>;

export default function CreateCategoryForm() {
  const { toast } = useToast();
  const router = useRouter();
  const { executeAsync, isPending } = useAction(addCategory);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  async function onSubmit(values: FormValues) {
    const result = await executeAsync(values);
    if (result?.data?.success) {
      toast({
        title: 'Амжилттай',
        description: 'Ангилал амжилттай нэмэгдлээ',
      });
      form.reset();
      router.push('/categories');
    } else if (result?.data?.error) {
      toast({
        variant: 'destructive',
        title: 'Алдаа гарлаа',
        description: 'Ангилал нэмэх үед алдаа гарлаа',
      });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Шинэ ангилал нэмэх</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Нэр</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="будаа агшаагч, ус буцалгагч..."
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormDescription>
                    Ангилалын нэрийг тодорхой бичнэ үү.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Тайлбар</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ангилалын тайлбар"
                      {...field}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormDescription>
                    Ангилалын тайлбар оруулна уу.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending}>
              {form.formState.isSubmitting ? 'Хадгалж байна...' : 'Хадгалах'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
