import puppeteer from 'puppeteer'
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

// // Generate unique id
const imageId = () => uuidv4();

export async function getScreeShoot(html) {

    const image = imageId();   
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);
    await page.screenshot({path: `public/${image}.png`});
    await browser.close();

    return `${image}.png`
}