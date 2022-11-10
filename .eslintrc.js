module.exports = {
    root: true,
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier/@typescript-eslint", "@react-native-community"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react-hooks"],
    rules: {
        "require-yield": "off",
        "no-shadow": "off",
        "no-useless-catch": "off",
        quotes: "off",
        "no-case-declarations": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "no-useless-escape": "off",
        "react/no-unescaped-entities": "off",
        "no-spaced-func": "off",
        // TODO: to be check
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "react-hooks/rules-of-hooks": "off",
        // TODO: to be fix
        "no-duplicate-case": "off",
        "no-self-assign": "off",
        "react-native/no-inline-styles": "off",
        "@typescript-eslint/no-explicit-any": "off",
        // TODO: next step
        complexity: "warn",
        // "max-depth": ["error", 2],
        // "max-nested-callbacks": ["error", 2],
        // "max-params": ["error", 5],
        // "max-lines": ["error", 500],
        // "max-lines-per-function": ["error", 50],
        // Custom rules
        // "wonder/no-external-component": "off",
        // "no-control-regex": "off",
    },
    globals: {
        Element: true,
        GeoJSON: true,
        React: true,
        RequestInit: true,
        Response: true,
        NodeJS: true,
    },
};
