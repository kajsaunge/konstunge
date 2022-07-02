// const sassPlugin = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
// const constants = require("./constants");
// const withPreact = require("next-plugin-preact");
// const withPlugins = require("next-compose-plugins");
// const withSourceMaps = require("@zeit/next-source-maps")();
// import frontmatter from "frontmatter-markdown-loader";
// import Mode from "frontmatter-markdown-loader/mode";

const { ANALYZE } = process.env;

// const environmentVariables = Object.keys(constants).reduce(
//   (defs, key) => ({
//     ...defs,
//     [`process.env.${key}`]: JSON.stringify(process.env[key]),
//   }),
//   {}
// );

// const markdownConfig = {
//   webpack: (cfg) => {
//     cfg.module.rules.push({
//       test: /\/.md$/,
//       loader: "frontmatter-markdown-loader",
//       options: { mode: ["react-component"] },
//     });
//     return cfg;
//   },
// };
// module.exports = {
//   webpack: (cfg) => {
//     cfg.module.rules.push({
//       test: /\.md$/,
//       loader: "frontmatter-markdown-loader",
//       options: { mode: ["react-component"] },
//     });
//     return cfg;
//   },
// };
const nextConfig = {
  webpack5: false,
  webpack(config, { isServer }) {
    console.log("nextConfig", nextConfig);
    if (ANALYZE) {
      console.log("ANALYZE", ANALYZE);
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }
    // const { DefinePlugin } = require("webpack");
    // config.plugins.push(new DefinePlugin(environmentVariables));
    return config;
  },
};
// removed for component lib dev: cssModules: true in sassLoaderOptions. excludePaths: [node_modules]
// module.export
// export default {
//   module: {
//     rules: [
//       {
//         test: /\**\/*\/.md$/,
//         use: [
//           {
//             loader: "html-loader",
//           },
//           {
//             loader: "markdown-loader",
//             options: {
//               // Pass options to marked
//               // See https://marked.js.org/using_advanced#options
//             },
//           },
//         ],
//       },
//     ],
//   },
// };
// module.exports = withPlugins(
//   [
//     withPreact,
//     withCSS,
//     [
//       sassPlugin,
//       {
//         sassLoaderOptions: {
//           includePaths: ["styles"],
//         },
//       },
//     ],
//     [
//       withImages,
//       {
//         inlineImageLimit: -1,
//       },
//     ],
//     withSourceMaps,
//   ],
//   nextConfig
// );
module.exports = {
  webpack: (config, { isServer }) => {
    nextConfig, withImages;
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    // if (ANALYZE) {
    //   console.log("Anal", ANALYZE);
    //   const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
    //   config.plugins.push(
    //     new BundleAnalyzerPlugin({
    //       analyzerMode: "server",
    //       analyzerPort: isServer ? 8888 : 8889,
    //       openAnalyzer: true,
    //     })
    //   );
    // }
    return config;
  },
};
