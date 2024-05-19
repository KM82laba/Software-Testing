const { Builder, By, until } = require('selenium-webdriver');
const { Select } = require('selenium-webdriver');

class SmartphonesPage {
    constructor(driver) {
        this.driver = driver;
        this.urlContains = "https://ozon.by/category/smartfony-15502/";
        this.urlContainsItem = "https://ozon.by/search/?text=Apple+%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD+iPhone+XR+A64+%D0%93%D0%91%2C+%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9&from_global=true";
        this.urlContainsFavPage = "https://ozon.by/my/favorites";
        this.filterBrand = By.xpath('/html/body/div[1]/div/div[1]/div[2]/div[2]/div[1]/div/aside/div[2]/div[3]/div[2]/div/div[1]/label');
        this.firstItem = By.xpath('/html/body/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/div[2]/div/a/div/span');
        this.favButtonItem = By.xpath('/html/body/div[1]/div/div[1]/div[2]/div[2]/div[2]/div[4]/div[1]/div/div/div[1]/div/div[2]/div/div/button');
        this.favButtonPage = By.xpath('/html/body/div[1]/div/div[1]/header/div[1]/div[3]/a[1]');
    }

    async filterByBrand() {
        await this.driver.findElement(this.filterBrand).click();
    }

    async isLoaded() {
        await this.driver.wait(until.urlContains(this.urlContains), 10000);
    }
    async isLoadedItem() {
        await this.driver.wait(until.urlContains(this.urlContainsItem), 10000);
    }
    async getFirstItemText() {
        return await this.driver.findElement(this.firstItem).getText();
    }
    async addToFavorites() {
        return await this.driver.findElement(this.favButtonItem).click();
    }
    async openFavorites() {
        await this.driver.findElement(this.favButtonPage).click();
        await this.driver.wait(until.urlContains(this.urlContainsFavPage), 10000);
    }
}

module.exports = SmartphonesPage;