import { Page } from '@playwright/test';
import { TableLocators } from '../../pages/keyboardwebtable';

export class TableNavigator {
  private page: Page;
  private numRows: number;
  private numCols: number;

  constructor(page: Page, numRows: number, numCols: number) {
    this.page = page;
    this.numRows = numRows;
    this.numCols = numCols;
  }

  async activateFirstCell() {
    await this.page.click(TableLocators.cell(0, 0));
    await this.page.waitForTimeout(100);
  }

  // Get text of the currently active cell (selected by keyboard)
  async getActiveCellText(): Promise<string> {
    const text = await this.page.textContent(TableLocators.activeCell);
    return text?.trim() ?? '';
  }

  async pressKey(key: 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'Enter') {
    await this.page.keyboard.press(key);
    await this.page.waitForTimeout(20);
  }

  // main method 2
  async printAllCells() {
    await this.activateFirstCell();

    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        // Read text from active cell
        const text = await this.getActiveCellText();
        console.log(`Cell [${row}, ${col}]:`, text);

        // Move Right to last cell in the row
        if (col < this.numCols - 1) {
          await this.pressKey('ArrowRight');
        }
      }

      // Move Down and reset to first column if not last row
      if (row < this.numRows - 1) {
        await this.pressKey('ArrowDown');
        // Move Left to first column after moving down
        for (let i = 0; i < this.numCols - 1; i++) {
          await this.pressKey('ArrowLeft');
        }
      }
    }
  }

  async navigateToCell(row: number, col: number) {
    await this.activateFirstCell();

    for (let i = 0; i < row; i++) {
      await this.pressKey('ArrowDown');
    }
    for (let i = 0; i < col; i++) {
      await this.pressKey('ArrowRight');
    }
  }

  async editActiveCell(newText: string) {
    await this.pressKey('Enter');

    // edit 100th cell
    await this.page.keyboard.down('Control');
    await this.page.keyboard.press('KeyA');
    await this.page.keyboard.up('Control');
    await this.page.keyboard.press('Delete');

    await this.page.keyboard.type(newText);

    await this.pressKey('Enter');
  }

  //main method 1
  async editCell(row: number, col: number, newText: string) {
    await this.navigateToCell(row, col);
    await this.editActiveCell(newText);
    await this.page.waitForTimeout(3000); 
  }
}
