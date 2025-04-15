export const mfConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/Counter.tsx",
    "./UIProvider": "./src/providers/UIProvider.tsx",
    // "./index": "./src/index.css",
  },
  shared: ["react", "react-dom"],
};
