import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from ".";
import { setTemplate, setTemplateWithIcon } from "./utils";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Buttons/Destructive",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = setTemplate.bind({});
Default.args = { variant: "destructive" };

export const Loading: Story = setTemplate.bind({});
Loading.args = { variant: "destructive", loading: true };

export const WithIcon: Story = setTemplateWithIcon.bind({});
WithIcon.args = { variant: "destructive" };

export const WithIconAndLoading: Story = setTemplateWithIcon.bind({});
WithIconAndLoading.args = { variant: "destructive", loading: true };

export const Disabled: Story = setTemplateWithIcon.bind({});
Disabled.args = { variant: "destructive", loading: true, disabled: true };
