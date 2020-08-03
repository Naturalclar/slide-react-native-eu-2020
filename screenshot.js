const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:8000");
  await setTimeout(()=>{},2000)
  await page.screenshot({ path: "card.png" });

  await browser.close();
})();
