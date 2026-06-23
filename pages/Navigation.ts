import { expect, type Locator, type Page } from '@playwright/test';

export class Navigation {
  readonly page: Page;
  readonly mainNavigation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainNavigation = page.getByRole('navigation', { name: 'Main navigation' });
  }

  async expectMainLinksVisible() {
    await expect(this.mainNavigation.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
    await expect(this.mainNavigation.getByRole('link', { name: 'Personal', exact: true })).toBeVisible();
    await expect(this.mainNavigation.getByRole('link', { name: 'Kids', exact: true })).toBeVisible();
    await expect(this.mainNavigation.getByRole('link', { name: 'Professional', exact: true })).toBeVisible();
    await expect(this.mainNavigation.getByRole('link', { name: 'Responsible AI', exact: true })).toBeVisible();
  }

  async openHome() {
    await this.mainNavigation.getByRole('link', { name: 'Home', exact: true }).click();
  }

  async openPersonal() {
    await this.mainNavigation.getByRole('link', { name: 'Personal', exact: true }).click();
  }

  async openKids() {
    await this.mainNavigation.getByRole('link', { name: 'Kids', exact: true }).click();
  }

  async openProfessional() {
    await this.mainNavigation.getByRole('link', { name: 'Professional', exact: true }).click();
  }

  async openResponsible() {
    await this.mainNavigation.getByRole('link', { name: 'Responsible AI', exact: true }).click();
  }
}
