import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Buttons",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
