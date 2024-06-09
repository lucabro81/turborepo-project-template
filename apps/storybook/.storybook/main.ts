import path, { join, dirname } from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import type { StorybookConfig } from "@storybook/vue3-vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    // "../../../packages/ui-components/@/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    // "../../../packages/ui-components/@/components/design/form-login/form-login.stories.ts",
    // "../../../packages/ui-components/@/components/ui/button/button.stories.ts",
    // "../../../packages/ui-components/button.stories.ts",
    // "../../../packages/ui-components/button.stories.ts",
    "../../../packages/elements/@/components/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../packages/elements/@/components/design/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    // "../../../packages/ui-components/@/components/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-actions"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-designs"),
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      docgen: "vue-component-meta",
    },
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    config.plugins?.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      tsconfigPaths({
        projects: [
          path.resolve(
            path.dirname(__dirname),
            "../..",
            "packages/ui-components",
            "tsconfig.json"
          ),
        ],
      })
    );

    return {
      ...config,
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          // this is required to avoid not necessary warnings
          onwarn(warning, warn) {
            if (
              ["MODULE_LEVEL_DIRECTIVE", "SOURCEMAP_ERROR"].includes(
                warning.code ?? ""
              )
            ) {
              return;
            }
            warn(warning);
          },
        },
      },
    };
  },
};
export default config;
