import type { Meta, StoryObj, VueRenderer } from "@storybook/vue3";
import {
  FormLogin,
  FormLoginActions,
} from "@/components/design/form-login/mod";
import { Button } from "@/components/ui/button";
import { type Props } from "./types";
import { expect, fn, userEvent, within } from "@storybook/test";
import type { PlayFunctionContext } from "@storybook/types";

const meta: Meta<typeof FormLogin> = {
  title: "Components/Design/Forms/Login",
  component: FormLogin,
  tags: ["autodocs"],
};

export default meta;

function setTemplate() {
  return `
    <FormLogin v-bind="arg">
      <template #actions="slotProps">
        <FormLoginActions v-bind="slotProps" />
      </template>
    </FormLogin>
  `;
}

function render(arg: Props) {
  return {
    components: { FormLogin, Button, FormLoginActions },
    setup: () => ({ arg }),
    template: setTemplate(),
  };
}

type Story = StoryObj<typeof FormLogin>;

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
    const submitButton = canvas.getByTestId("login-btn");
    const email = canvas.getByTestId("email-input");
    await userEvent.type(email, "email@test.it", {
      delay: 10,
    });
    expect(submitButton).toBeDisabled();
    const message = canvas.getByTestId("password-input");
    await userEvent.type(message, "kjhaskfjhasdlif2938r7ijdsfh", {
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
  play: async ({ canvasElement }: PlayFunctionContext<VueRenderer, Props>) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId("login-btn");
    const email = canvas.getByTestId("email-input");
    await userEvent.type(email, "email@test.it", {
      delay: 10,
    });
    expect(submitButton).toBeDisabled();
    const message = canvas.getByTestId("password-input");
    await userEvent.type(message, "kjhaskfjhasdlif2938r7ijdsfh", {
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
    onSubmit: fn(),
  },
  play: async ({ canvasElement }: PlayFunctionContext<VueRenderer, Props>) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId("login-btn");
    const email = canvas.getByTestId("email-input");
    await userEvent.click(email);
    expect(submitButton).toBeDisabled();

    const password = canvas.getByTestId("password-input");
    await userEvent.click(password);
    await sleep(100);
    const emailError = canvas.getByTestId("email-error");
    expect(emailError).toBeVisible();

    await userEvent.click(email);
    expect(submitButton).toBeDisabled();
    await sleep(100);
    const passwordError = canvas.getByTestId("password-error");
    expect(passwordError).toBeVisible();
  },
};

export const InvalidEmail: Story = {
  render,
  args: {
    onSubmit: fn(),
  },
  play: async ({ canvasElement }: PlayFunctionContext<VueRenderer, Props>) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId("login-btn");
    const email = canvas.getByTestId("email-input");
    await userEvent.type(email, "emailtest.it", {
      delay: 10,
    });
    expect(submitButton).toBeDisabled();

    const password = canvas.getByTestId("password-input");
    await userEvent.click(password);
    await sleep(100);
    const emailError = canvas.getByTestId("email-error");
    expect(emailError).toBeVisible();

    await userEvent.type(password, "kjsfhg9s8fgfq3knbr3n4b", {
      delay: 10,
    });

    expect(submitButton).toBeDisabled();
  },
};

export const InvalidPassword: Story = {
  render,
  args: {
    onSubmit: fn(),
  },
  play: async ({ canvasElement }: PlayFunctionContext<VueRenderer, Props>) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByTestId("login-btn");
    const email = canvas.getByTestId("email-input");
    await userEvent.type(email, "email@test.it", {
      delay: 10,
    });
    expect(submitButton).toBeDisabled();

    const password = canvas.getByTestId("password-input");
    await userEvent.click(password);
    await userEvent.type(password, "sd8fj38", {
      delay: 10,
    });
    await userEvent.click(email);
    await sleep(100);
    const passwordError = canvas.getByTestId("password-error");
    expect(passwordError).toBeVisible();
    expect(submitButton).toBeDisabled();
  },
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
