const { time } = require("node:console");

const common = `
--require runner/assertion.js
--require runner/hooks.js
--require ./test/step-definitions/**/*.js
--format ./test/utils/reporter.js,
--tags '@test',
--parallel 1,
--retry 0
`;

module.exports = {
  default: `--require ./tests/step-definitions/**/*.js --format ./tests/utils/reporter.js ./tests/features/**/*.feature`
};