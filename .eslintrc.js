module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        project: "tsconfig.json",
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/stylistic",
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "max-classes-per-file": "error",
        "semi": ["error"],
        "@typescript-eslint/quotes": ["error", "double"],
        "eol-last": 1,
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    }
}
