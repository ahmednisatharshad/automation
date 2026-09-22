
import { test } from '@playwright/test';
import { TextBoxSteps } from '../../../steps/keyboardactions.step';
//17.07.2025
test('Keyboard Actions - Copy Paste and Edit', async ({ page }) => {
   const baseUrls = test.info().config.metadata.baseUrls;
    await page.goto(baseUrls.keyboardactions, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        })
  const textBoxSteps = new TextBoxSteps(page);

  await textBoxSteps.fillNameAndEmail();

  await textBoxSteps.enterAndCopyCurrentAddress();

  await textBoxSteps.pasteToPermanentAddress();

   await textBoxSteps.submitFormWithKeyboardExtras();
  
});

