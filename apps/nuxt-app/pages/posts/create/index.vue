<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";
import { Toaster } from "@/components/ui/toast";
import { FormNewPost, FormNewPostActions } from "@repo/elements/design";

const { toast } = useToast();

const onSubmit = () => {
  toast({
    title: "New Post",
    description: "You have successfully created a new post",
  });
};
</script>

<template>
  <h1 class="p-4 text-lg font-extrabold">Nuxt Test App</h1>
  <main class="p-4">
    <FormNewPost @submit="onSubmit">
      <template #actions="slotProps">
        <FormNewPostActions v-bind="slotProps"></FormNewPostActions>
      </template>
    </FormNewPost>
    <Toaster />
  </main>
</template>
