import { expect, type Locator, type Page } from '@playwright/test';

export const sitePages = [
  {
    path: '/',
    title: /AI, Every Day/,
    heading: /Smarter days start with the right questions\./,
  },
  {
    path: '/kids.html',
    title: /AI for Kids/,
    heading: /Turn every .why.. into a learning adventure\./,
  },
  {
    path: '/personal.html',
    title: /AI in Personal Life/,
    heading: /More time for the moments that matter\./,
  },
  {
    path: '/professional.html',
    title: /AI at Work/,
    heading: /Less busywork\. More space for good judgment\./,
  },
  {
    path: '/responsible.html',
    title: /Responsible AI/,
    heading: /Smart tools still need human wisdom\./,
  },
];

export async function expectPageReady(page: Page, expected: (typeof sitePages)[number]) {
  await page.goto(expected.path);
  await expect(page).toHaveTitle(expected.title);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(expected.heading);
}

export async function expectSuccessfulResponse(page: Page, urlPart: string, action: () => Promise<void>) {
  const responsePromise = page.waitForResponse(
    (response) => response.url().includes(urlPart) && response.status() < 400
  );

  await action();
  const response = await responsePromise;
  expect(response.ok()).toBeTruthy();
}

export async function expectImageLoaded(image: Locator) {
  await expect(image).toBeVisible();
  await expect(image).toHaveJSProperty('complete', true);
  const naturalWidth = await image.evaluate((element) => (element as HTMLImageElement).naturalWidth);
  expect(naturalWidth).toBeGreaterThan(0);
}
