import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Buttons",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: (typeof Button)["props"]) => ({
    components: { Button },
    template: `<Button class="testtest">${args.default}</Button>`,
  }),
  args: {
    variant: "default",
    size: "default",
    default: "test",
  },
};
