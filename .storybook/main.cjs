module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    interactionsDebugger: true,
    storyStoreV7: true,
  },
  staticDirs: ["../public"],
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") config.base = "/ignitelab-design-system/";
    return config;
  },
};
