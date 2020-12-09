import puppeteer, { Page } from "puppeteer-core";
import { v4 as uuidv4 } from "uuid";
import { getOptions } from "./options";

// Generate unique id
const imageId = () => uuidv4();

let _page;

async function getPage() {
  if (_page) return _page;
  const options = await getOptions(true);
  const browser = await puppeteer.launch(options);

  _page = await browser.newPage();

  return _page;
}

export async function getScreenShoot(html, type) {
  const image = imageId();
  const path = `${image}.${type}`;
  const page = await getPage();

  await page.setViewport({ width: 1680, height: 1050 });
  await page.setContent(html);
  await page.evaluateHandle("document.fonts.ready");
  await page.screenshot({ path: `public/${path}` });

  return path;
}
