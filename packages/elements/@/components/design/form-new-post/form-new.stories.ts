import type { PlayFunctionContext } from "@storybook/types";
import type { Meta, StoryObj, VueRenderer } from "@storybook/vue3";
import { FormNewPost, FormNewPostActions } from "./mod";
import { type Props, type FormValues } from "./types";
import { Button } from "@/components/ui/button";
import { expect, fn, userEvent, within } from "@storybook/test";

const meta: Meta<typeof FormNewPost> = {
  title: "Components/Design/Forms/NewPost",
  component: FormNewPost,
  tags: ["autodocs"],
};

export default meta;

function setTemplate() {
  return `
    <FormNewPost v-bind="arg">
      <template #actions="slotProps">
        <FormNewPostActions v-bind="slotProps" />
      </template>
    </FormNewPost>
  `;
}

function render(arg: Props) {
  return {
    components: { FormNewPost, Button, FormNewPostActions },
    setup: () => ({ arg }),
    template: setTemplate(),
  };
}

type Story = StoryObj<typeof FormNewPost>;
export const SubmitTest: Story = {
  render,
  args: {
    onSubmit: fn(), // FIXME: action("onSubmit") break test, probably a storybook bug
  },
  play: async ({
    canvasElement,
    args,
  }: PlayFunctionContext<VueRenderer, Props>) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId("save-post");
    const title = canvas.getByTestId("title-input");
    await userEvent.type(title, "My Post title", {
      delay: 10,
    });
    expect(submitButton).toBeDisabled();
    const message = canvas.getByTestId("message-input");
    await userEvent.type(message, "My Very Long Post Message", {
      delay: 10,
    });
    expect(submitButton).toBeEnabled();
    await userEvent.click(submitButton);
    await sleep(1000);
    expect(args.onSubmit).toBeCalled();
  },
};

export const GeneralError: Story = {
  render,
  args: {
    onSubmit: () => {
      fn();
      throw new Error("Server Error: you're fu**ed, yell to the backend guys");
    },
  },
  play: async ({
    canvasElement,
    args,
  }: PlayFunctionContext<VueRenderer, Props>) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId("save-post");
    const title = canvas.getByTestId("title-input");
    await userEvent.type(title, "My Post title", {
      delay: 10,
    });
    expect(submitButton).toBeDisabled();
    const message = canvas.getByTestId("message-input");
    await userEvent.type(message, "My Very Long Post Message", {
      delay: 10,
    });
    expect(submitButton).toBeEnabled();
    await userEvent.click(submitButton);
    await sleep(100);
    const messageError = canvas.getByTestId("global-error");
    expect(messageError).toBeVisible();
    expect(submitButton).toBeDisabled();
  },
};

export const RequiredFields: Story = {
  render,
  args: {
    onSubmit: () => {
      fn();
      throw new Error("Server Error: you're fu**ed, yell to the backend guys");
    },
  },
  play: async ({
    canvasElement,
    args,
  }: PlayFunctionContext<VueRenderer, Props>) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId("save-post");
    const title = canvas.getByTestId("title-input");
    await userEvent.click(title);
    expect(submitButton).toBeDisabled();
    const message = canvas.getByTestId("message-input");
    await userEvent.click(message);
    await userEvent.click(title);
    expect(submitButton).toBeDisabled();
  },
};

export const TitleTooShort: Story = {
  render,
  args: {
    onSubmit: fn(),
  },
  play: async ({
    canvasElement,
    args,
  }: PlayFunctionContext<VueRenderer, Props>) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId("save-post");
    const title = canvas.getByTestId("title-input");
    await userEvent.type(title, "Too short", {
      delay: 10,
    });
    expect(submitButton).toBeDisabled();
    const message = canvas.getByTestId("message-input");
    await userEvent.type(message, "My Very Long Post Message", {
      delay: 10,
    });
    expect(submitButton).toBeDisabled();
  },
};

export const TextTooShort: Story = {
  render,
  args: {
    onSubmit: fn(),
  },
  play: async ({
    canvasElement,
    args,
  }: PlayFunctionContext<VueRenderer, Props>) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId("save-post");
    const title = canvas.getByTestId("title-input");
    await userEvent.type(title, "My Post title", {
      delay: 10,
    });
    expect(submitButton).toBeDisabled();
    const message = canvas.getByTestId("message-input");
    await userEvent.type(message, "Short", {
      delay: 10,
    });
    await userEvent.click(title);
    expect(submitButton).toBeDisabled();
  },
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
