import * as z from "zod";
export const ZodFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  global: z.string(),
});
type FormValuesFormSchema = z.infer<typeof ZodFormSchema>;
export type FormValues = Pick<FormValuesFormSchema, "email" | "password">;

export interface Props {
  onSubmit: (values: Pick<FormValues, "email" | "password">) => void;
}
