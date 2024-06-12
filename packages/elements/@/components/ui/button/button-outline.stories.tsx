import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from ".";
import { setTemplate, setTemplateWithIcon } from "./utils";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Buttons/Outline",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = setTemplate.bind({});
Default.args = { variant: "link" };

export const Loading: Story = setTemplate.bind({});
Loading.args = { variant: "link", loading: true };

export const WithIcon: Story = setTemplateWithIcon.bind({});
WithIcon.args = { variant: "link" };

export const WithIconAndLoading: Story = setTemplateWithIcon.bind({});
WithIconAndLoading.args = { variant: "link", loading: true };

export const Disabled: Story = setTemplateWithIcon.bind({});
Disabled.args = { variant: "link", loading: true, disabled: true };
