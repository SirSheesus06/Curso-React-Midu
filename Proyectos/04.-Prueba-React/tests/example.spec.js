// @ts-check
import { test, expect } from '@playwright/test'

const CAT_IMAGE_PREFIX_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app show random text and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMAGE_PREFIX_URL)).toBeTruthy()
})
