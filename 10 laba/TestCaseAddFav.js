const { Builder, By, until } = require('selenium-webdriver');
const HomePage = require('./HomePage');
const SmartphonesPage = require('./SmartphonesPage');
const FavPage = require('./FavPage');
const handleTestResult = require('./handleTestResult');
async function createNewPaste() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        const homePage = new HomePage(driver);
        const smartphonesPage = new SmartphonesPage(driver);
        const favPage = new FavPage(driver);
        const searchInput = "Apple Смартфон iPhone XR A64 ГБ, черный";
        const countFavItems = "1";
        await homePage.open();
        await driver.sleep(1000);
        await homePage.reload();
        await homePage.searchItem(searchInput);

        await smartphonesPage.isLoadedItem();
        await smartphonesPage.addToFavorites();
        await smartphonesPage.openFavorites();

        const resultText = await favPage.getItemText();
        const resultCount = await favPage.getCountFavItems() == countFavItems;
        
        handleTestResult(resultText && resultCount, "Phone add to favorites successfully.", "Failed to add to phone favorites.");

    } finally {
        await driver.quit();
    }
}

createNewPaste();