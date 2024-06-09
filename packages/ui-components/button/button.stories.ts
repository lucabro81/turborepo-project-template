import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Buttons",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => ({
    template: `<Button v-bind="args">diocane</Button>`,
  }),
  args: {
    variant: "default",
    size: "default",
  },
};
