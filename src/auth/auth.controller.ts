import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  // This is how service get initialize in controller
  constructor(private authService: AuthService) {}

  @Post('/register')
  register() {
    return 'I am Registered User';
  }

  @Post('/login')
  login() {
    return 'I am Loggedin User';
  }
}
