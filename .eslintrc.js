module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: ["markdown", "jest"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-var": ["error"],
    "no-shadow": "off",
    "comma-dangle": ["error", "never"],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "prefer-const": 1,
    "space-before-function-paren": 0,
    // "no-shadow": ["error"],
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false
      }
    ],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "vue/custom-event-name-casing": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/camelcase": "off",
    "no-alert": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-null": "off",
    "unicorn/filename-case": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-string-refs": "off",
    "no-new": "off",
    "import/order": "off",
    "react/no-unknown-property": "off",
    "vue/no-deprecated-functional-template": "off",
    "vue/one-component-per-file": "off",
    "spaced-comment": ["error", "always", { exceptions: ["@__PURE__"] }]
  }
}
