const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const homePage = require('../pageObjects/HomePage');

When(/^The Page Is Loaded$/, async function () {
    await homePage.getPageTitle();
});
