<script setup lang="ts">
import { h } from "vue";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";
import { Input } from "../../ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { toast } from "../../ui/toast";

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
  toast({
    title: "You submitted the following values:",
    description: h(
      "pre",
      { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
      h("code", { class: "text-white" }, JSON.stringify(values, null, 2))
    ),
  });
});
</script>
<template>
  <form @sumit="onSubmit" className="space-y-4">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Email" v-bind="componentField" />
        </FormControl>
        <FormDescription> This is your public display name. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            type="password"
            placeholder="password"
            v-bind="componentField"
          />
        </FormControl>
      </FormItem>
    </FormField>
  </form>
</template>
