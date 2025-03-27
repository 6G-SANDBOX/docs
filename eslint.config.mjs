import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import * as mdx from "eslint-plugin-mdx";


export default defineConfig([
  globalIgnores([
    "node_modules/",
    "dist/",
    "build/",
    "scripts/",
    "temp/",
    ".docusaurus/",
    ".next/",
    ".nuxt/",
    ".storybook/",
    ".vscode/",
    ".github/",
    ".gitignore",
    "versioned_docs/",
    "versioned_sidebars/",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      globals: {...globals.browser, ...globals.node}
    },
    plugins: {
      js
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "warn",
      "no-extra-semi": "error",
      "camelcase": "error",
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "eol-last": ["error", "always"],
    } 
  },
  
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",
    }
  },

  {
    ...mdx.flat,
    // optional, if you want to lint code blocks at the same
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
    }),
  },
  
  {
    files: ["**/*.mdx"],
    plugins: {
      mdx
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "quotes": ["error", "double"],
      "eol-last": ["error", "always"],
    }
  },
]);
