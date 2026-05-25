import { test, expect } from '../../../src/fixtures/testFixtures';

test.describe('GET Booking APIs', () => {

  test('Positive - Get all bookings', async ({ bookingClient }) => {
    const response = await bookingClient.getBookings();

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);
  });

  test('Negative - Invalid booking id', async ({ bookingClient }) => {
    const response = await bookingClient.getBookingById(999999);

    expect(response.status()).toBe(404);
  });
});