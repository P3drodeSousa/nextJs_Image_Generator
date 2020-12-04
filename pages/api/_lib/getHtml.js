import puppeteer from 'puppeteer'

export async function getScreeShoot(html) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);
    await page.screenshot({path: 'public/example.png'});

    await browser.close();
}