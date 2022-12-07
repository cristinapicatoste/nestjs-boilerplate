import { Injectable } from '@nestjs/common';
import * as httpContext from 'express-http-context';
import { JwtPayload } from '../token/jwt.dto';

@Injectable()
export class RequestContextProvider {
  get(key) {
    return httpContext.get(key);
  }

  set(key, value) {
    return httpContext.set(key, value);
  }
  public hasSession(): boolean {
    return !!this.get('auth');
  }
  public setAuth(jwtPayload: JwtPayload): void {
    this.set('auth', jwtPayload);
  }
  public userId(): string {
    return this.get('auth')?.userId;
  }
}
