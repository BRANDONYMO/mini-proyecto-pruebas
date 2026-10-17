import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Autenticación', () => {
    let loginPage: LoginPage;
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.abrir();
    });

    test('Camino feliz: Entrada exitosa', async ({ page }) => {
        await loginPage.login('admin', '1234');
        await expect(page).toHaveURL(/dashboard/);
    });

    test('Revisión de tabla en dashboard', async ({ page }) => {
        await loginPage.login('admin', '1234');
        await expect(page.getByTestId('fila-reserva')).toHaveCount(2);
    });

    test('Caso negativo: Error de credenciales', async ({ page }) => {
        await loginPage.login('admin', 'mala');
        await expect(page.getByRole('alert')).toHaveText('Error');
    });
});