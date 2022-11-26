import { themes } from "@storybook/theming";
import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/styles/global.css";

initialize({
  onUnhandledRequest: "bypass",
});

export const decorators = [mswDecorator];

if (typeof global.process === "undefined") {
  const { worker } = require("../src/mocks/browser");
  if (window.location.pathname === "/ignitelab-design-system") {
    window.location.pathname = "/ignitelab-design-system/";
  }

  worker.start({
    serviceWorker: {
      url: "/ignitelab-design-system/mockServiceWorker.js",
    },
  });
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
