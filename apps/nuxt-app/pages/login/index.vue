<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <h2 data-testId="login-title" class="text-lg font-bold mb-12">Login</h2>
    <FormLogin class="w-1/3 min-w-96" @submit="onSubmit">
      <template #actions="slotProps">
        <FormLoginActions v-bind="slotProps"></FormLoginActions>
      </template>
    </FormLogin>
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import { Toaster } from "@/components/ui/toast";
import {
  FormLogin,
  FormLoginActions,
  type FormLoginValues,
} from "@repo/elements/design";

const route = useRouter();
const [, setUser] = useUser();

const onSubmit = async (values: FormLoginValues) => {
  //   const { error } = await useLogin(values);

  //   if (error) {
  //     toast({
  //       title: "Error",
  //       description: error,
  //       variant: "destructive",
  //     });
  //   } else {
  //     route.push("/posts");
  //   }

  try {
    const data = await $fetch<User>("/api/login", {
      method: "POST",
      body: values,
    });
    setUser(data);
    route.push("/posts");
  } catch (error) {
    throw new Error("Error: invalid username or password");
  }
};
</script>
