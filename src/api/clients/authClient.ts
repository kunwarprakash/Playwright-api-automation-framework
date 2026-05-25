import { APIRequestContext } from '@playwright/test';
import { authPayload } from '../models/authPayload';

export class AuthClient {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createToken(payload = authPayload) {
    return await this.request.post('/auth', {
      data: payload
    });
  }
}