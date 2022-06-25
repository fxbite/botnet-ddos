import {Browser, chromium} from 'playwright'
import {v4 as uuidv4} from 'uuid' 

class Botnet {

    async createBotnet(browser: Browser, websiteTarget: string, path: string) {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(websiteTarget);
        await page.screenshot({path: `${path}/${uuidv4()}.png`})
    }
}

export default new Botnet