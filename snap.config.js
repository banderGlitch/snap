module.exports = {
    input: "src/index.js",
    output: {
      path: "dist",
    },
    server: {
      port: 9000,
    },
    customizeWebpackConfig: (config) => {
      return {
        ...config,
        experiments: {
          ...config.experiments,
          topLevelAwait: true,
        },
      };
    },
  };
// module.exports = {
//     input: "src/index.js",
//     output: {
//       path: "dist",
//       filename: "bundle.js",
//     },
//     server: {
//       port: 9000,
//     },
//     bundler: 'webpack',
//     bundlerCustomizer: (config) => {
//       config.experiments = {
//         ...config.experiments,
//         topLevelAwait: true
//       };
//       return config;
//     },
//   };