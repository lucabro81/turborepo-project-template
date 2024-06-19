<template>
  <main class="p-4 w-screen h-screen flex flex-col">
    <header class="flex flex-row">
      <h1 class="text-xl font-extrabold flex-1">Nuxt Test App</h1>
      <div v-if="user?.email">{{ `${user?.firstName} ${user?.lastName}` }}</div>
    </header>
    <div class="mt-4 w-full flex-1">
      <slot />
    </div>
  </main>
</template>
<script setup lang="ts">
const [user] = useUser();
console.log("user", user);
</script>
