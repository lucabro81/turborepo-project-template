<script setup lang="ts">
import {
  FormLogin,
  FormLoginActions,
  type FormLoginValues,
} from "@repo/elements/design";

const route = useRouter();

const onSubmit = (values: FormLoginValues) => {
  if (values.email === "admin@test.it" && values.password === "12345678") {
    route.push("/posts");
  } else {
    throw new Error("Error: Invalid username or password");
  }
};
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <h2 data-testId="login-title" class="text-lg font-bold mb-12">Login</h2>
    <FormLogin class="w-1/3 min-w-96" @submit="onSubmit">
      <template #actions="slotProps">
        <FormLoginActions v-bind="slotProps"></FormLoginActions>
      </template>
    </FormLogin>
  </div>
</template>
