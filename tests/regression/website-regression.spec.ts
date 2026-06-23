import { test } from '@playwright/test';
import { expectPageReady, sitePages } from '../../utils/testHelpers';

test.describe('AI, Every Day regression tests', () => {
  // TC-REG-DYNAMIC:
  // Generates one regression test per page from the sitePages list.
  for (const sitePage of sitePages) {
    test(`TC-REG-DYNAMIC: ${sitePage.path} page renders stable title and heading @regression`, async ({ page }) => {
      await expectPageReady(page, sitePage);
    });
  }
});
