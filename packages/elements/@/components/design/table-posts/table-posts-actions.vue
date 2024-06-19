<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-vue-next";
const props = defineProps<{
  id: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}>();
</script>

<template>
  <div class="flex gap-2 justify-end">
    <Button variant="secondary" size="icon" @click="() => props.onEdit(id)">
      <PencilIcon />
    </Button>
    <Button variant="destructive" size="icon" @click="() => props.onDelete(id)">
      <TrashIcon />
    </Button>
  </div>
</template>
