// steps/testcase-checkbox-autocomplete.steps.ts
import { Page } from '@playwright/test';
import { CheckboxActions } from './testcase-checkbox.step';
import { AutoCompleteSteps } from './testcase-autocomplete.step';
import { CheckboxLocators } from '../../pages/testcase-checkbox';

export class CheckboxAutocompleteIntegration {
  private checkboxsteps: CheckboxActions;
  private autoComplete: AutoCompleteSteps;
  private checkboxlocators: CheckboxLocators;

  constructor(private page: Page) {
    this.checkboxsteps = new CheckboxActions(page);
    this.autoComplete = new AutoCompleteSteps(page);
    this.checkboxlocators = new CheckboxLocators(page);
  }

   async navigateToAutocompleteMenu() {
    await this.checkboxlocators.elementsMenu().click();
    await this.checkboxlocators.widgetsMenu().click();
    await this.checkboxlocators.autoCompleteMenuItem().click();
    }

  //  Combined Flow 
  async runIntegrationFlow() {
   
    console.log('Starting Checkbox flow...');
    await this.checkboxsteps.openPage();
    await this.checkboxsteps.navigateToCheckboxMenu();
    await this.checkboxsteps.expandAllOptions();
    await this.checkboxsteps.selectCheckboxItems();
    await this.checkboxsteps.collapseNodes();
    await this.checkboxsteps.verifySelectedItems();
    console.log('Checkbox flow completed.');

    
    console.log('Starting Autocomplete flow...');
    await this.navigateToAutocompleteMenu();
    await this.autoComplete.verifyPageHeader();
    await this.autoComplete.verifyPlaceholders();
    await this.autoComplete.selectColorsFromJson();
    console.log('Autocomplete flow completed.');
  }
}
