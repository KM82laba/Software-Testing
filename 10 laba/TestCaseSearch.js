const { Builder, By, until } = require('selenium-webdriver');
const HomePage = require('./HomePage');
const SmartphonesPage = require('./SmartphonesPage');
const handleTestResult = require('./handleTestResult');
async function createNewPaste() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        const homePage = new HomePage(driver);
        const smartphonesPage = new SmartphonesPage(driver);
        const searchInput = "Смартфоны";
        const filterBrandInput = "Apple";

        await homePage.open();
        await driver.sleep(3000);
        await homePage.reload();
        await homePage.searchFor(searchInput);
        await driver.sleep(2000);
        await homePage.goToSmartphones();

        await smartphonesPage.isLoaded();
        await smartphonesPage.filterByBrand();
        await driver.sleep(2000);

        const itemBodyText = await smartphonesPage.getFirstItemText();
        const resultTest = itemBodyText.includes(filterBrandInput);
        handleTestResult(resultTest, "Phone filtered successfully.", "Failed to filter phone.");

    } finally {
        await driver.quit();
    }
}

createNewPaste();