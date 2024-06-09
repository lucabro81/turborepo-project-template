import type { Meta, StoryObj } from "@storybook/vue3";
import { Textarea } from ".";

const meta: Meta<typeof Textarea> = {
  title: "Components/UI/Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    defaultValue: "default value",
    placeholder: "placeholder",
    rows: 13,
  },
};

export const ColsLimit: Story = {
  args: {
    defaultValue: "default value",
    placeholder: "placeholder",
    class: "w-fit",
    rows: 13,
    cols: 20,
  },
};
