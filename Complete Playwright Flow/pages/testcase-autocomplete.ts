// locators.ts
import { Locator, Page } from '@playwright/test';

export class AutoCompleteLocators {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  widgetsHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Widgets' });
  }

  autoCompleteOption(): Locator {
    return this.page.getByText('Auto Complete');
  }

  pageHeader(): Locator {
    return this.page.getByRole('heading');
  }

  multipleInputPlaceholder(): Locator {
    return this.page.locator('#autoCompleteMultiple');
  }

  singleInputPlaceholder(): Locator {
    return this.page.locator('#autoCompleteSingle');
  }

  multipleValueContainer(): Locator {
    return this.page.locator('.auto-complete__value-container').first();
  }

  multipleInputField(): Locator {
    return this.page.locator('#autoCompleteMultipleInput');
  }

  autoCompleteDropdownOptions(): Locator {
    return this.page.locator('.auto-complete__option');
  }

  singleValueContainer(): Locator {
    return this.page.locator('.auto-complete__control.css-yk16xz-control > .auto-complete__value-container');
  }

  singleInputField(): Locator {
    return this.page.locator('#autoCompleteSingleInput');
  }

  selectedTagByText(color: string): Locator {
    if (color.toLowerCase() === 'Red') {
        return this.page.getByText(color, { exact: true });
    } else if (color === 'Green') {
        return this.page.getByText(color); 
    }else {
        return this.page.getByText(color);
    }
}
}
