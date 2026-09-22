import { test,expect } from '@playwright/test';
import { SortableSteps } from '../../../steps/testcase-interactionSortable.step';
//06.08.2025
test.describe('US1034 - Validate and verify the sortable functionality in interaction tab',()=>{

test('List Sorting', async ({ page }) => {
  const sortable = new SortableSteps(page);

  await sortable.navigateToInteractionPage();
  await sortable.openSortableTab();

  const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
  await sortable.verifyListItemsVisible(items);

  // Perform reorderings
  await sortable.reorderListItems('One', 'Five');    // Move 'One' to 'Five's position
  await sortable.reorderListItems('Six', 'Two');     // Move 'Six' to 'Two's position
  await sortable.reorderListItems('Three', 'Four');  // Swap 'Three' with 'Four'
  
  // Fetch and log new order
  await sortable.assertListOrder(items);
  // Reload page and check reset
  await sortable.getListOrgOrder();

});



test('Grid Sorting', async ({ page }) => {
  const sortable = new SortableSteps(page);
  await sortable.navigateToInteractionPage();
  await sortable.openSortableTab();
  await sortable.openGridTab();

  const expectedOriginal = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  await sortable.verifyGridCellsVisible(expectedOriginal);

  // Perform reorderings
  await sortable.reorderGridCells([
    ['One', 'Five'],                      // Move 'One' to 'Five's position
    ['Nine', 'Two'],                      // Move 'Nine' to 'Two's position
    ['Three', 'Seven'],                   // Move 'Three' to 'Seven's position
  ]);

  // Fetch and log new order
  const newOrder = await sortable.getCurrentGridOrder();
  console.log('New order of grid items:', newOrder);

  // Reload page and check reset
  await page.reload({ waitUntil: 'domcontentloaded' });

  await sortable.openSortableTab();
  await sortable.openGridTab();
  await sortable.verifyGridCellsVisible(expectedOriginal);
  const orderAfterReload = await sortable.getCurrentGridOrder();
  console.log('Order of grid items after reload:', orderAfterReload);
  
 
});
})



































































//   // Assert expected new order
//   const expectedOrder = ['Two', 'Six', 'Four', 'Three', 'One', 'Five'];
//   await sortable.assertListOrder(expectedOrder);