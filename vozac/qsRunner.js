require("chromedriver");
var webdriver = ({ Builder, By, Key, util } = require("selenium-webdriver"));

var chromeCapabilities = webdriver.Capabilities.chrome();
var chromeOptions = {
  args: ["--test-type", "--start-maximized"],
};
chromeCapabilities.set("chromeOptions", chromeOptions);

async function kemalTest() {
  let driver = await new webdriver.Builder()
    .withCapabilities(chromeCapabilities)
    .forBrowser("chrome")
    .build();
  await driver.get("https://qstack.tech");
  await driver.findElement(By.className("btn-get-started")).click();
  await driver.findElement(By.className("bx bxl-linkedin")).click();
}
kemalTest();
