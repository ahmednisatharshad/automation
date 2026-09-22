import { test } from '@playwright/test';
import { DemoqaWebTablesStep } from '../../../steps/Testcase-webtables.step';
//22.07.2025
test('US1005 - Add 4 entries in the table and modify entries for first name Kavipriya which is on 5th row', async ({ page }) => {
    const demoqaWebTable=new DemoqaWebTablesStep(page);
    await demoqaWebTable.gotoUrl();
    await demoqaWebTable.addFields();
    await demoqaWebTable.modifyEntries();
});
