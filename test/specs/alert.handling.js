import { expect, $, $$ } from '@wdio/globals'

const successfulMessage = 'You successfully clicked an alert';

describe('Alert Handling test', () => {
    it('successful message should be displayed after alert handling', async () => {
        await $('[href="/javascript_alerts"]').click()
        await $('[onclick="jsAlert()"]').click()
        
          await browser.acceptAlert()
          await expect($('[id="result"]')).toHaveText(successfulMessage)
        //accept alert

        //expect that successfulMessage is displayed
    })
})

