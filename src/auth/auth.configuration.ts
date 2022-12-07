import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthConfiguration {
  constructor(private configService: ConfigService) {}

  public jwtKey(): string {
    return this.configService.get<string>('JWT_KEY');
  }
  public accessTokenExpire(): number {
    return parseInt(this.configService.get<string>('AUTH_ACCESS_EXPIRE'), 10);
  }
  public refreshTokenExpire(): number {
    return parseInt(this.configService.get<string>('AUTH_REFRESH_EXPIRE'), 10);
  }
  public hashRounds(): number {
    return (parseInt(this.configService.get<string>('AUTH_HASH_ROUNDS'), 10) || 10);
  }
}
