import { test, expect } from '../../../src/fixtures/testFixtures';
import { validateSchema } from '../../../src/utils/schemaValidator';
import { authSchema } from '../../../src/api/schemas/auth.schema';

test.describe('Authentication API', () => {

  test('Positive - Generate token successfully', async ({ authClient }) => {
    const response = await authClient.createToken();

    expect(response.status()).toBe(200);

    const body = await response.json();

    validateSchema(authSchema, body);

    expect(body.token).toBeTruthy();
  });

  test('Negative - Invalid credentials', async ({ authClient }) => {
    const response = await authClient.createToken({
      username: 'invalid',
      password: 'invalid'
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.reason).toContain('Bad credentials');
  });
});