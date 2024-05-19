const { Builder, By, until } = require('selenium-webdriver');
const handleTestResult = require('./handleTestResult');

async function TestCaseSearch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://ozon.by/');
        const searchInput = "Смартфоны";
        const filterBrandInput = "Apple";

        await driver.sleep(3000);
        await driver.findElement(By.id('reload-button')).click();

        await driver.findElement(By.xpath('//*[@id="stickyHeader"]/div[2]/div/div/form/div/div[2]/input')).sendKeys(searchInput);

        await driver.sleep(2000);

        await driver.findElement(By.xpath(`//*[@id="stickyHeader"]/div[2]/div/div[2]/div/div/div/section/div/a[6]`)).click();

        await driver.wait(until.urlContains("https://ozon.by/category/smartfony-15502/"), 10000);

        await driver.findElement(By.xpath('//*[@id="layoutPage"]/div[1]/div[2]/div[2]/div[1]/div/aside/div[2]/div[3]/div[2]/div/div[1]/div')).click();

        await driver.sleep(2000);

        const itemBodyTest = await driver.findElement(By.xpath('//*[@id="paginatorContent"]/div/div/div[1]/div[2]/div/a/div/span')).getText();
        console.log(itemBodyTest);
        
        const resultTest = itemBodyTest.includes(filterBrandInput);

        handleTestResult(resultTest, "Phone filtered successfully.", "Failed to filter phone.");
        
    } finally {
        await driver.quit();
    }
}
TestCaseSearch();