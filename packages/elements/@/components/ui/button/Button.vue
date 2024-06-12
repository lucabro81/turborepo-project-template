<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { Primitive, type PrimitiveProps } from "radix-vue";
import { type ButtonVariants, buttonVariants } from ".";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-vue-next";

interface Props extends PrimitiveProps {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <span className="mr-2 w-4 h-4" v-if="$slots.icon && size !== 'icon'"
      ><slot name="icon" class="mr-2"
    /></span>
    <slot />
    <span className="ml-2" v-if="loading && size !== 'icon'"
      ><LoaderCircle class="w-4 h-4 animate-spin"
    /></span>
  </Primitive>
</template>
