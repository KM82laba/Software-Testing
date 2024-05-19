const { Builder, By, until } = require('selenium-webdriver');

class SmartphonesPage {
    constructor(driver) {
        this.driver = driver;
        this.urlContains = "https://ozon.by/category/smartfony-15502/";
        this.filterBrand = By.xpath('/html/body/div[1]/div/div[1]/div[2]/div[2]/div[1]/div/aside/div[2]/div[3]/div[2]/div/div[1]/label');
        this.firstItem = By.xpath('/html/body/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/div[2]/div/a/div/span');
    }

    async filterByBrand() {
        await this.driver.findElement(this.filterBrand).click();
    }

    async isLoaded() {
        await this.driver.wait(until.urlContains(this.urlContains), 10000);
    }

    async getFirstItemText() {
        return await this.driver.findElement(this.firstItem).getText();
    }
}

module.exports = SmartphonesPage;