import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usuario: Locator;
    readonly password: Locator;
    readonly boton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usuario = page.getByLabel('Usuario');
        this.password = page.getByLabel('Contraseña');
        this.boton = page.getByRole('button', { name: 'Entrar' });
    }
    async abrir() { await this.page.goto('/login.html'); }
    async login(u: string, p: string) {
        await this.usuario.fill(u); await this.password.fill(p); await this.boton.click();
    }
}