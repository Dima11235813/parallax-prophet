import { test, expect } from '@playwright/test'

test('homepage has greeting text', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('#app')).toContainText('Hello Vite!')
})
