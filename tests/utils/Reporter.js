const { Formatter } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

module.exports = class Reporter extends Formatter {
  constructor(options) {
    super(options);
    this.results = [];

    options.eventBroadcaster.on('test-case-finished', (event) => {
      const { pickle, result } = event;
      this.results.push({
        name: pickle?.name || 'unknown',
        status: result?.status || 'UNKNOWN',
      });
    });

    options.eventBroadcaster.on('test-run-finished', () => {
      const outDir = path.resolve(process.cwd(), 'reports');
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(
        path.join(outDir, 'cucumber-summary.json'),
        JSON.stringify(this.results, null, 2)
      );
    });
  }
};