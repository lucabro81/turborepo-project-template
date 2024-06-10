import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { FormContext } from "vee-validate";
import { ref, watch, type Ref } from "vue";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function watchFormValues(form: FormContext, isValid: Ref<boolean>) {
  watch(
    () => form,
    (newForm) => {
      isValid.value = newForm.meta.value.valid;
    },
    { deep: true }
  );
}
export function useIsFormValid(form: FormContext) {
  const isValid = ref(false);
  watchFormValues(form, isValid);
  return isValid;
}
