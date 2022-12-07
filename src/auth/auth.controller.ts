import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthCredentialsDto } from './dto/authCredentials.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/signup')
  async signUp(@Body() request: AuthCredentialsDto) {
    return this.authService.signUp(request);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/signin')
  signIn(
    @Body() request: AuthCredentialsDto,
  ): Promise<{ access_token: string }> {
    return this.authService.signIn(request);
  }
}
