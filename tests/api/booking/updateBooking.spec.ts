import { test, expect } from '../../../src/fixtures/testFixtures';
import { bookingPayload } from '../../../src/data/testData';

test.describe('Update Booking API', () => {

  test('Positive - Update booking', async ({ authClient, bookingClient }) => {

    const tokenResponse = await authClient.createToken();
    const tokenBody = await tokenResponse.json();

    const createResponse = await bookingClient.createBooking(bookingPayload);
    const createBody = await createResponse.json();

    const bookingId = createBody.bookingid;

    const updatedPayload = {
      ...bookingPayload,
      firstname: 'UpdatedName'
    };

    const updateResponse = await bookingClient.updateBooking(
      bookingId,
      tokenBody.token,
      updatedPayload
    );

    expect(updateResponse.status()).toBe(200);

    const updatedBody = await updateResponse.json();

    expect(updatedBody.firstname).toBe('UpdatedName');
  });
});