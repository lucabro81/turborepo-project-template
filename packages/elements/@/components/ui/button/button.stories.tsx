import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Buttons",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

const sizes = [
  { value: "lg", label: "Large" },
  { value: "default", label: "Default" },
  { value: "sm", label: "Small" },
  { value: "xs", label: "Extra Small" },
  { value: "icon", label: "@" },
];

function setTemplate(
  args: (typeof Button)["Props"],
  { argTypes }: { argTypes: Record<string, unknown> }
) {
  return {
    props: Object.keys(argTypes),
    components: { Button },
    setup: () => ({
      args,
      sizes,
    }),
    template: `
      <div class="space-x-2">
        <Button v-for="size in sizes" v-bind="$props" :variant="args.variant" :size="size.value">{{size.label}}</Button>
      </div>
    `,
  };
}

type Story = StoryObj<typeof Button>;

export const Default: Story = setTemplate.bind({});
Default.args = {};

export const Secondary: Story = setTemplate.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Destructive: Story = setTemplate.bind({});
Destructive.args = {
  variant: "destructive",
};

export const Ghost: Story = setTemplate.bind({});
Ghost.args = {
  variant: "ghost",
};

export const Outline: Story = setTemplate.bind({});
Outline.args = {
  variant: "outline",
};

export const Link: Story = setTemplate.bind({});
Link.args = {
  variant: "link",
};

// export const Default: Story = {
//   render: (args: (typeof Button)["props"]) => ({
//     components: { Button },
//     template: `<Button class="testtest">${args.default}</Button>`,
//   }),
//   args: {
//     variant: "default",
//     size: "default",
//     default: "test",
//   },
// };
