import * as z from "zod";
export const ZodFormSchema = z.object({
  title: z.string().min(10),
  text: z.string().min(8),
  global: z.string(),
});
export type FormValues = z.infer<typeof ZodFormSchema>;

export interface Props {
  onSubmit: (values: FormValues) => void;
}
