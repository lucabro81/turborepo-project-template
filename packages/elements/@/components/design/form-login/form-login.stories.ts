import type { Meta, StoryObj } from "@storybook/vue3";
import { FormLogin } from "@/components/design/form-login/mod";

const meta: Meta<typeof FormLogin> = {
  title: "Components/Design/Forms/Login",
  component: FormLogin,
};

export default meta;

type Story = StoryObj<typeof FormLogin>;
export const Default: Story = {
  args: {
    defaultValue: "default value",
    placeholder: "placeholder",
  },
};
