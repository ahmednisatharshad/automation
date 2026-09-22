import { expect, Dialog } from '@playwright/test';
import { AlertsPage } from '../../pages/testcase-alertsHandling';

export class AlertsSteps {
  readonly page: AlertsPage;

  constructor(page: AlertsPage) {
    this.page = page;
  }

  async navigateToAlertsPage() {
    await this.page.goto();
    // await this.page.clickAlertsFrameWindowsHeading();
    // await this.page.clickAlertsMenu();
    await this.page.isAlertsPageVisible();
  }

  // 1. Simple alert
  async handleSimpleAlert() {
    this.page.page.once('dialog', async (dialog: Dialog) => {
      console.log(`Dialog message from alertButton: ${dialog.message()}`);
      await this.page.page.waitForTimeout(1000);
      await dialog.accept();
    });
    await this.page.clickAlertButton();
 
  }

  // 2. Timer alert with waitForEvent
  async handleTimerAlert() {
    await this.page.clickTimerAlertButton();
    const timerDialog = await this.page.page.waitForEvent('dialog', { timeout: 6000 });
    console.log(`Dialog message from timerAlertButton: ${timerDialog.message()}`);
    //await this.page.page.waitForTimeout(1000);
    await timerDialog.dismiss();
  }

    /* Another method
async handleTimerAlert() {
  const startTime = Date.now();

  this.page.page.once('dialog', async (dialog: Dialog) => {
    const timer = (Date.now() - startTime) / 1000;
    console.log(`Dialog message from timerAlertButton: ${dialog.message()}`);
    console.log(`Wait time before alert appeared: ${timer} seconds`);

    // Assert elapsed time is at least ~5 seconds (allow slight tolerance)
    expect(elapsed).toBeGreaterThanOrEqual(4.5);

    await dialog.dismiss();
  });

  await this.page.clickTimerAlertButton();
}
*/


  // 3. Confirm dialog accept
  async handleConfirmAccept() {
    this.page.page.once('dialog', async (dialog: Dialog) => {
      console.log(`Dialog message from confirmButton (accept): ${dialog.message()}`);
      await this.page.page.waitForTimeout(1000);
      await dialog.accept();
    });
    await this.page.clickConfirmButton();
    await expect(this.page.page.getByText('You selected Ok')).toBeVisible();
  }

  // 4. Confirm dialog dismiss
  async handleConfirmDismiss() {
    this.page.page.once('dialog', async (dialog: Dialog) => {
      console.log(`Dialog message from confirmButton (dismiss): ${dialog.message()}`);
      // await this.page.page.waitForTimeout(1000);
      await dialog.dismiss();
    });
    await this.page.clickConfirmButton();
    await expect(this.page.page.getByText('You selected Cancel')).toBeVisible();
  }

  // 5. Prompt dialog accept with input
  async handlePromptAccept(inputText: string = 'Hello') {
    this.page.page.once('dialog', async (dialog: Dialog) => {
      console.log(`Dialog message from promtButton (accept): ${dialog.message()}`);
     //await this.page.page.waitForTimeout(1000);
      await dialog.accept(inputText);
    });
    await this.page.clickPromptButton();
    await expect(this.page.page.getByText(`You entered ${inputText}`)).toBeVisible();
  }

  // 6. Prompt dialog dismiss
  async handlePromptDismiss() {
    this.page.page.once('dialog', async (dialog: Dialog) => {
      console.log(`Dialog message from promtButton (dismiss): ${dialog.message()}`);
    // await this.page.page.waitForTimeout(1000);
      await dialog.dismiss();
    });
    await this.page.clickPromptButton();
  }
}
