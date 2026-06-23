import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly footer: Locator;
  readonly heroImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = page.getByRole('heading', {
      level: 1,
      name: /Smarter days start with the right questions\./,
    });
    this.footer = page.locator('footer.footer');
    this.heroImage = page.getByRole('img', {
      name: /Friendly futuristic robot using a holographic interface/,
    });
  }

  async goto() {
    await this.page.goto('/');
  }

  async expectLoaded() {
    await expect(this.page).toHaveTitle(/AI, Every Day/);
    await expect(this.mainHeading).toBeVisible();
  }

  async expectFooterVisible() {
    await expect(this.footer).toBeVisible();
  }
}
