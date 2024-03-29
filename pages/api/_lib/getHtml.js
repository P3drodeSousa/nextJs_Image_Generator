import puppeteer, { Page } from "puppeteer-core";
import { getOptions } from "./options";

let _page;

async function getPage() {
  if (_page) return _page;
  const options = await getOptions(true);
  const browser = await puppeteer.launch(options);

  _page = await browser.newPage();

  return _page;
}

export async function getScreenShoot(html, type) {
  const page = await getPage();

  await page.setViewport({ width: 1680, height: 1050 });
  await page.setContent(html);
  await page.evaluateHandle("document.fonts.ready");
  const imageBuffer = await page.screenshot()

  return imageBuffer;
}

export async function getImages(query) {
  const page = await getPage();

  await page.goto("https://worldvectorlogo.com/fr/", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector("#search_field");
  await page.type("#search_field", query.img, { delay: 30 });
  await page.keyboard.press(String.fromCharCode(13));
  await page.waitForNavigation();

  const images = await page.evaluate(() => {
    const img = document.querySelectorAll(".logos img");
    const src = [];
    img.forEach((el) => {
      src.push(el.src);
    });
    return src;
  });

  return images;
}