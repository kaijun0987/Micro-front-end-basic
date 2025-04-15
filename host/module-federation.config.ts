export const mfConfig = {
  name: "host",
  exposes: {},
  remotes: {
    remote: "remote@http://localhost:8081/remoteEntry.js",
    vue_remote: "vue_remote@http://localhost:8082/remoteEntry.js",
  },
  shared: ["react", "react-dom"],
};
