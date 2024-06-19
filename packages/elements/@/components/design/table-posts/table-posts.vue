<script setup lang="ts">
import { columns } from "./columns";
import { type Post, type TableActions } from "./types";
import { DataTable } from "@/components/ui/data-table";

export type TablePostsProperties = TableActions & {
  data: Post[];
};

const props = defineProps<TablePostsProperties>();
</script>

<template>
  <div class="container py-10 mx-auto">
    <DataTable :columns="columns" :data="data" />
  </div>
</template>
