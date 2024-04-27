const { Builder, By, until } = require('selenium-webdriver');
const { Select } = require('selenium-webdriver');

async function createNewPaste() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Открыть https://ozon.by/
        await driver.get('https://ozon.by/');
        // Заполнение полей
        const searchInput = "Смартфоны";
        const filterBrandInput = "Apple";

        await driver.sleep(3000);
        await driver.findElement(By.id('reload-button')).click();

        // Ввод данных
        await driver.findElement(By.xpath('//*[@id="stickyHeader"]/div[2]/div/div/form/div/div[2]/input')).sendKeys(searchInput);

        await driver.sleep(2000);

        // // Поиск смартфонов
        await driver.findElement(By.xpath(`//*[@id="stickyHeader"]/div[2]/div/div[2]/div/div/div/section/div/a[6]`)).click();

        // Ждем, пока страница загрузится
        await driver.wait(until.urlContains("https://ozon.by/category/smartfony-15502/"), 10000);

        // // Фильтр по брендам
        await driver.findElement(By.xpath('//*[@id="layoutPage"]/div[1]/div[2]/div[2]/div[1]/div/aside/div[2]/div[3]/div[2]/div/div[1]/div')).click();

        await driver.sleep(2000);

        const itemBodyTest = await driver.findElement(By.xpath('//*[@id="paginatorContent"]/div/div/div[1]/div[2]/div/a/div/span')).getText();
        console.log(itemBodyTest);
        if (itemBodyTest.includes(filterBrandInput)) {
            console.log("Phone filtered successfully.");
        } else {
            console.log("Failed to filter phone.");
        }

    } finally {
        // Закрыть браузер после завершения
        await driver.quit();
    }
}
createNewPaste();