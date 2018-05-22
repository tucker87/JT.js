module.exports = {
    "extends": "google",
    parser: 'babel-eslint',
    rules: {
        "arrow-parens": ["error", "as-needed"],
        "linebreak-style": [0],
        curly: ["error", "multi"],
        "keyword-spacing": ["error", {before: false, after: false}],
        semi: [0],
        indent: ["error", 4]
    }
};