import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Нэр доод тал нь 2 үсэгнээс бүрдэнэ!',
  }),
  description: z.string().min(2, {
    message: 'Тайлбар доод тал нь 2 үсэгнээс бүрдэнэ!',
  }),
});
