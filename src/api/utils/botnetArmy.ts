import puppeteer from 'puppeteer'
import botnet from './botnet'

class Army {

    async createArmy(websiteTarget: string, timeReload: number, numBot: number) {
        const browser = await puppeteer.launch({headless: true});
            
        for (let i = 1; i <= numBot; i++) {
            await botnet.createBotnet(browser, websiteTarget, timeReload)
        }

        await browser.close();
    }

}

export default new Army