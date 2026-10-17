import { test, expect, expectNoOverflow } from './fixtures.js';

test('teaching placeholder renders at its production base path', async ({
  page,
  siteHealth,
}) => {
  const response = await page.goto('/teach/');
  expect(response.ok()).toBe(true);
  await expect(
    page.getByRole('heading', { level: 1, name: 'Teaching', exact: true }),
  ).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Coming soon.');
  await expectNoOverflow(page);
  expect(siteHealth.assets.size).toBeGreaterThan(0);
  for (const asset of siteHealth.assets) {
    expect(new URL(asset).pathname).toMatch(/^\/teach\//);
  }
});
