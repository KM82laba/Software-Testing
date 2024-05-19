const { Builder, By, until } = require('selenium-webdriver');
const { Select } = require('selenium-webdriver');

class FavPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://ozon.by/my/favorites';
        this.firstItem = By.xpath('/html/body/div[1]/div/div[1]/div[2]/div/div[2]/div[5]/div/div/div/div/div/div[1]/a/div/span');
        this.favItemTextIcon = By.xpath('/html/body/div[1]/div/div[1]/header/div[1]/div[3]/a[1]/span[1]');
    }

    async open() {
        await this.driver.get(this.url);
    }
    async getItemText() {
        return await this.driver.findElement(this.firstItem).getText();
    }
    async getCountFavItems() {
        return await this.driver.findElements(this.favItemTextIcon).getText();
    }
}
module.exports = FavPage;