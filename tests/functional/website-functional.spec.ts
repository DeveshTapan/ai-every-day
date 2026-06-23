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
  // TC-FUNC-001: Validate that the home page loads successfully with expected content.
  test('TC-FUNC-001: home page loads correctly @regression', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.expectLoaded();
  });

  // TC-FUNC-002: Validate that main navigation links route to the expected internal pages.
  test('TC-FUNC-002: main navigation links work correctly @regression', async ({ page }) => {
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

  // TC-FUNC-DYNAMIC:
  // Generates one functional test per internal page from sitePages, excluding the home page.
  for (const sitePage of sitePages.slice(1)) {
    test(`TC-FUNC-DYNAMIC: ${sitePage.path} opens successfully`, async ({ page }) => {
      await expectPageReady(page, sitePage);
    });
  }

  // TC-FUNC-003: Validate that the website stylesheet loads successfully.
  test('TC-FUNC-003: CSS file loads correctly', async ({ page }) => {
    await expectSuccessfulResponse(page, 'styles.css', async () => {
      await page.goto('/');
    });
  });

  // TC-FUNC-004: Validate that the website JavaScript loads and applies expected page state.
  test('TC-FUNC-004: JavaScript file loads correctly', async ({ page }) => {
    await expectSuccessfulResponse(page, 'script.js', async () => {
      await page.goto('/');
    });

    await expect(page.getByRole('link', { name: 'Home' })).toHaveClass(/active/);
  });

  // TC-FUNC-005: Validate that key images and static assets load correctly.
  test('TC-FUNC-005: images and assets load correctly @regression', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await expectImageLoaded(homePage.heroImage);
  });

  // TC-FUNC-006: Validate that the site footer is visible on the home page.
  test('TC-FUNC-006: footer is visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.expectFooterVisible();
  });
});
