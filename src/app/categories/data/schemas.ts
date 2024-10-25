import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Нэр доод тал нь 2 үсэгнээс бүрдэнэ!',
  }),
  description: z.string().min(2, {
    message: 'Тайлбар доод тал нь 2 үсэгнээс бүрдэнэ!',
  }),
});

export const editFormSchema = formSchema.merge(
  z.object({
    id: z.number({
      message: 'Id required',
    }),
  })
);

export const deleteFormSchema = z.object({
  id: z.number({ message: 'Id required' }),
});
