<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useIsFormValid } from "@/lib/utils";
import { type FormContext } from "vee-validate";

const props = defineProps<{
  form: FormContext;
}>();

const isValid = useIsFormValid(props.form);
</script>
<template>
  <div class="flex space-x-2 justify-end">
    <Button type="button" variant="secondary">Cancel</Button>
    <Button :disabled="!isValid" data-testid="save-post">Save</Button>
  </div>
</template>
