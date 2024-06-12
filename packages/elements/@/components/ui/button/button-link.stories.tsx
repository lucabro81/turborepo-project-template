import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from ".";
import { setTemplate, setTemplateWithIcon } from "./utils";

const meta: Meta<typeof Button> = {
  title: "Components/UI/Buttons/Link",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = setTemplate.bind({});
Default.args = { variant: "secondary" };

export const Loading: Story = setTemplate.bind({});
Loading.args = { variant: "secondary", loading: true };

export const WithIcon: Story = setTemplateWithIcon.bind({});
WithIcon.args = { variant: "secondary" };

export const WithIconAndLoading: Story = setTemplateWithIcon.bind({});
WithIconAndLoading.args = { variant: "secondary", loading: true };

export const Disabled: Story = setTemplateWithIcon.bind({});
Disabled.args = { variant: "secondary", loading: true, disabled: true };
