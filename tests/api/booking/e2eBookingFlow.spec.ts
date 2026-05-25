import { test, expect } from '../../../src/fixtures/testFixtures';
import { bookingPayload } from '../../../src/data/testData';

test('E2E Booking Flow', async ({ authClient, bookingClient }) => {

  const tokenResponse = await authClient.createToken();
  const tokenBody = await tokenResponse.json();

  const createResponse = await bookingClient.createBooking(bookingPayload);
  const createBody = await createResponse.json();

  const bookingId = createBody.bookingid;

  const updatedPayload = {
    ...bookingPayload,
    firstname: 'AIAutomation'
  };

  const updateResponse = await bookingClient.updateBooking(
    bookingId,
    tokenBody.token,
    updatedPayload
  );

  expect(updateResponse.status()).toBe(200);

  const verifyResponse = await bookingClient.getBookingById(bookingId);

  const verifyBody = await verifyResponse.json();

  expect(verifyBody.firstname).toBe('AIAutomation');