import * as z from "zod";
export const ZodFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  global: z.string(),
});
export type FormValues = z.infer<typeof ZodFormSchema>;

export interface Props {
  onSubmit: (values: FormValues) => void;
}
