import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  async showResult() {
    console.log('showResult');
  }

  async login() {}

  async register() {}
}
