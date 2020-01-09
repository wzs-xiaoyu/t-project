module.exports = {
  extends: ["@commitlint/config-angular"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "chore", "revert", "upgrade", "revert", "build"]],
    "type-case": [0, "always", "lowerCase"]
  }
};
