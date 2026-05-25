import { test, expect } from '../../../src/fixtures/testFixtures';
import { bookingPayload } from '../../../src/data/testData';

test.describe('Delete Booking API', () => {

  test('Positive - Delete booking', async ({ authClient, bookingClient }) => {

    const tokenResponse = await authClient.createToken();
    const tokenBody = await tokenResponse.json();

    const createResponse = await bookingClient.createBooking(bookingPayload);
    const createBody = await createResponse.json();

    const bookingId = createBody.bookingid;

    const deleteResponse = await bookingClient.deleteBooking(
      bookingId,
      tokenBody.token
    );

    expect(deleteResponse.status()).toBe(201);
  });

  test('Negative - Delete without token', async ({ bookingClient }) => {

    const deleteResponse = await bookingClient.deleteBooking(1, '');

    expect(deleteResponse.status()).toBe(403);
  });
});