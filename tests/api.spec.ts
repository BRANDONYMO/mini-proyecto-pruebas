import { test, expect } from '@playwright/test';

test('API externa responde JSON válido', async ({ request }) => {
    const res = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(res.ok()).toBeTruthy();
    expect(await res.json()).toHaveProperty('name');
});