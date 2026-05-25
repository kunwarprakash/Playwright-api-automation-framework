import { test as base } from '@playwright/test';
import { AuthClient } from '../api/clients/authClient';
import { BookingClient } from '../api/clients/bookingClient';

type MyFixtures = {
  authClient: AuthClient;
  bookingClient: BookingClient;
};

export const test = base.extend<MyFixtures>({
  authClient: async ({ request }, use) => {
    await use(new AuthClient(request));
  },

  bookingClient: async ({ request }, use) => {
    await use(new BookingClient(request));
  }
});

export { expect } from '@playwright/test';