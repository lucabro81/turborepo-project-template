<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { type Props, type FormValues, ZodFormSchema } from "./types";

const FormSchema = toTypedSchema(ZodFormSchema);

const props = defineProps<Props>();

const form = useForm({
  validationSchema: FormSchema,
});

form.setFieldValue("global", "hidden");

const onSubmit = form.handleSubmit(async (values: FormValues) => {
  try {
    await props.onSubmit(values);
  } catch (error) {
    const msg = error instanceof Error ? error.message : "unknown error";
    form.setFieldError("global", msg);
  }
});
</script>
<template>
  <form @submit="onSubmit" className="space-y-4">
    <FormField v-slot="{ componentField }" name="title">
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
          <Input
            type="text"
            data-testid="title-input"
            placeholder="Enter post title"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="text">
      <FormItem>
        <FormLabel>Text</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Enter post content"
            data-testid="message-input"
            v-bind="componentField"
            rows="20"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="global">
      <FormControl>
        <Input type="hidden" v-bind="componentField" />
      </FormControl>
      <FormMessage data-testid="global-error" />
    </FormField>
    <slot name="actions" :form="form" />
  </form>
</template>
