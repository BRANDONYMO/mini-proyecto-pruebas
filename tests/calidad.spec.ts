import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Auditoría de red y accesibilidad', async ({ page }) => {
    const errores: string[] = [];
    page.on('pageerror', err => errores.push(err.message));
    await page.goto('/login.html');
    expect(errores).toEqual([]);

    const axe = await new AxeBuilder({ page }).analyze();
    expect(axe.violations).toHaveLength(0);
});