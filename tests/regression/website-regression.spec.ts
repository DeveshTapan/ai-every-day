import { test } from '@playwright/test';
import { expectPageReady, sitePages } from '../../utils/testHelpers';

test.describe('AI, Every Day regression tests', () => {
  for (const sitePage of sitePages) {
    test(`${sitePage.path} page renders stable title and heading @regression`, async ({ page }) => {
      await expectPageReady(page, sitePage);
    });
  }
});
