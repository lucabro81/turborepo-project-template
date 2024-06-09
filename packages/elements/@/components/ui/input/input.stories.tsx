import type { Meta, StoryObj } from "@storybook/vue3";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/UI/Forms/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    defaultValue: "default value",
    placeholder: "placeholder",
  },
};
