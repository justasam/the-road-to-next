import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.plugins("simple-import-sort"),
  {
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // External packages.
            ["^@?\\w"],
            // Internal packages.
            ["^\\u0000", "^[^.]", "^\\."],
            // Style imports.
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
];

export default eslintConfig;
