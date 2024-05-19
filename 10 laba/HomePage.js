const { Builder, By, until } = require('selenium-webdriver');
const { Select } = require('selenium-webdriver');

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://ozon.by/';
        this.searchInput = By.xpath('//*[@id="stickyHeader"]/div[2]/div/div/form/div/div[2]/input');
        this.searchButton = By.xpath('//*[@id="stickyHeader"]/div[2]/div/div[2]/form/button');
        this.reloadButton = By.id('reload-button');
        this.smartphonesLink = By.xpath(`/html/body/div[1]/div/div[1]/header/div[1]/div[2]/div/div[2]/div/div[2]/div/div/div/div/a[6]`);
    }

    async open() {
        await this.driver.get(this.url);
    }

    async reload() {
        await this.driver.findElement(this.reloadButton).click();
    }

    async searchFor(query) {
        await this.driver.findElement(this.searchInput).sendKeys(query);
    }
    async searchItem(query){
        await this.driver.findElement(this.searchInput).sendKeys(query);
        await this.driver.sleep(2000);
        await this.driver.findElement(this.searchButton).click();
    }
    async goToSmartphones() {
        await this.driver.findElement(this.smartphonesLink).click();
    }
}
module.exports = HomePage;