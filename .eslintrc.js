module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "next-env.d.ts",
    "build",
    "public",
    "**/coverage",
    "**/node_modules",
    "**/*.min.js",
    "*.config.js",
    ".*lintrc.js",
  ],
  ignorePatterns: [
    "next-env.d.ts",
    "build",
    "public",
    "**/coverage",
    "**/node_modules",
    "**/*.min.js",
    "*.config.js",
    ".*lintrc.js",
    "typed-css-d.ts",
  ],
};
