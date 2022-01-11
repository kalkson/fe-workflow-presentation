module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-max-length": [2, "always", 10],
    "subject-min-length": [2, "always", 2],
    "scope-case": [1, "always", "upper-case"],
  },
};
