<script setup lang="ts">
import { FormLogin, FormLoginActions } from "@repo/elements/design";

const props = defineProps<{
  appName: string;
}>();

const route = useRouter();

const onSubmit = () => {
  route.push("/posts/create");
};
</script>

<template>
  <h1 class="p-4 text-lg font-extrabold">Nuxt Test App</h1>
  <main class="p-4">
    <FormLogin @submit="onSubmit">
      <template #actions="slotProps">
        <FormLoginActions v-bind="slotProps"></FormLoginActions>
      </template>
    </FormLogin>
  </main>
</template>
