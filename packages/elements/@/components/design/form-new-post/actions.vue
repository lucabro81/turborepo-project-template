<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { type FormContext } from "vee-validate";
import { ref, watch, type Ref } from "vue";

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

<script lang="ts">
function watchFormValues(form: FormContext, isValid: Ref<boolean>) {
  watch(
    () => form,
    (newForm) => {
      isValid.value = newForm.meta.value.valid;
    },
    { deep: true }
  );
}
function useIsFormValid(form: FormContext) {
  const isValid = ref(false);
  watchFormValues(form, isValid);
  return isValid;
}
</script>
