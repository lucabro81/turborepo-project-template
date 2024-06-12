<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { Input } from "../../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { ZodFormSchema, type Props } from "./types";

const FormSchema = toTypedSchema(ZodFormSchema);

const props = defineProps<Props>();

const form = useForm({
  validationSchema: FormSchema,
});

form.setFieldValue("global", "hidden");

const onSubmit = form.handleSubmit(async (values) => {
  try {
    await props.onSubmit(values);
  } catch (error) {
    const msg = error instanceof Error ? error.message : "unknown error";
    form.setFieldError("global", msg);
  }
});
</script>
<template>
  <form @submit="onSubmit" class="space-y-4">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            type="text"
            data-testid="email-input"
            placeholder="Email"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage data-testid="email-error" />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input
            type="password"
            data-testid="password-input"
            placeholder="password"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage data-testid="password-error" />
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
