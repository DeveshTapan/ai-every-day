import { expect, test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { Navigation } from '../../pages/Navigation';
import {
  expectImageLoaded,
  expectPageReady,
  expectSuccessfulResponse,
  sitePages,
} from '../../utils/testHelpers';

test.describe('AI, Every Day functional tests', () => {
  test('home page loads correctly @regression', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.expectLoaded();
  });

  test('main navigation links work correctly @regression', async ({ page }) => {
    const navigation = new Navigation(page);

    await page.goto('/');
    await navigation.expectMainLinksVisible();

    await navigation.openKids();
    await expect(page).toHaveURL(/kids\.html$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/learning adventure/);

    await navigation.openPersonal();
    await expect(page).toHaveURL(/personal\.html$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/moments that matter/);

    await navigation.openProfessional();
    await expect(page).toHaveURL(/professional\.html$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/good judgment/);

    await navigation.openResponsible();
    await expect(page).toHaveURL(/responsible\.html$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/human wisdom/);
  });

  for (const sitePage of sitePages.slice(1)) {
    test(`${sitePage.path} opens successfully`, async ({ page }) => {
      await expectPageReady(page, sitePage);
    });
  }

  test('CSS file loads correctly', async ({ page }) => {
    await expectSuccessfulResponse(page, 'styles.css', async () => {
      await page.goto('/');
    });
  });

  test('JavaScript file loads correctly', async ({ page }) => {
    await expectSuccessfulResponse(page, 'script.js', async () => {
      await page.goto('/');
    });

    await expect(page.getByRole('link', { name: 'Home' })).toHaveClass(/active/);
  });

  test('images and assets load correctly @regression', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await expectImageLoaded(homePage.heroImage);
  });

  test('footer is visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.expectFooterVisible();
  });
});
