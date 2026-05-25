import { APIRequestContext } from '@playwright/test';

export class BookingClient {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getBookings() {
    return await this.request.get('/booking');
  }

  async getBookingById(id: number) {
    return await this.request.get(`/booking/${id}`);
  }

  async createBooking(payload: object) {
    return await this.request.post('/booking', {
      data: payload
    });
  }

  async updateBooking(id: number, token: string, payload: object) {
    return await this.request.put(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`
      },
      data: payload
    });
  }

  async deleteBooking(id: number, token: string) {
    return await this.request.delete(`/booking/${id}`, {
      headers: {
        Cookie: `token=${token}`
      }
    });
  }
}