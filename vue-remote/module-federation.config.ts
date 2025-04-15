export const mfConfig = {
  name: "vue_remote",
  filename: "remoteEntry.js",
  exposes: {
    "./counterMounter": "./src/counterMounter.ts",
  },
  dts: false,
  shared: ["vue"],
};
