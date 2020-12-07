import puppeteer from 'puppeteer'
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

//TODO DELETE LAST GENERATED IMG


// // Generate unique id
const imageId = () => uuidv4();

export async function getScreenShoot(html, type) {

    const image = imageId();   

    const browser = await puppeteer.launch({
        args: [
        "--start-maximized", // you can also use '--start-fullscreen'
      ],
    });
    const page = await browser.newPage();

    await page.setViewport({ width: 1680, height: 1050 });
    await page.setContent(html);
    await page.screenshot({path: `public/${image}.${type}`});

    await browser.close();

    return `${image}.png`
}