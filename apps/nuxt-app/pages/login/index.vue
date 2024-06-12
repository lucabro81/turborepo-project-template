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
  <div class="h-full w-full flex items-center justify-center">
    <FormLogin class="w-1/3 min-w-96" @submit="onSubmit">
      <template #actions="slotProps">
        <FormLoginActions v-bind="slotProps"></FormLoginActions>
      </template>
    </FormLogin>
  </div>
</template>
