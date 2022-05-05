module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".jsx",
            ".js",
            ".json",
            ".tsx",
          ],
          alias: {
            src: "./src",
            screens: "./src/screens",
            components: "./src/components",
            models: "./src/models",
          },
        },
      ],
    ],
  };
};
