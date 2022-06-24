import {Browser} from 'playwright'

export const createBotnet = async(browser: Browser, websiteTarget: string, name: string) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(websiteTarget);
    // await page.reload({timeout: timeToAttack * 1000})
    await page.screenshot({ path: name });
    await browser.close();

}