import { test, expect } from '../../../src/fixtures/testFixtures';
import { bookingPayload } from '../../../src/data/testData';

test.describe('Create Booking API', () => {

  test('Positive - Create booking', async ({ bookingClient }) => {
    const response = await bookingClient.createBooking(bookingPayload);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.booking.firstname).toBe('Anand');
  });

  test('Negative - Create booking with invalid payload', async ({ bookingClient }) => {
    const response = await bookingClient.createBooking({});

    expect(response.status()).not.toBe(200);
  });
});