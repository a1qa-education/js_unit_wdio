import { expect, $ } from '@wdio/globals'

const randomString = crypto.randomUUID();

describe('Dynamic Controls test', () => {
    it('populated text should be displayed in dynamic control', async () => {
        await $('//*[@href="/dynamic_controls"]').click()

        await $('//button[text() = "Enable"]').click()
        
        let inputField = await $('#input-example input')
        await inputField.waitForEnabled()

        await inputField.setValue(randomString)
        let text=inputField.getValue()

        expect (text).toEqual(randomString)
        //expect that inputField is enabled

        //input randomString into inputField

        //expect that randomString is displayed
    })
})

