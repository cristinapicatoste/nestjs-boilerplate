import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RefreshTokenService } from './token/refreshToken.service';
import { User } from '../user/user.entity';

@Injectable()
export class AuthTokenGuard implements CanActivate {
  constructor(
    private refreshTokenService: RefreshTokenService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const noAuth = this.reflector.get<boolean>('no-auth', context.getHandler());
    const request = context.switchToHttp().getRequest();

    if (noAuth && !request.headers.authorization) {
      return true;
    }

    if (!request.headers.authorization) {
      return false;
    }
    let accessToken;
    if (request.headers.authorization.includes(' ')) {
      accessToken = request.headers.authorization.split(' ')[1];
    } else {
      accessToken = request.headers.authorization;
    }

    // const user: User = await this.refreshTokenService.validateAccessToken(
    //   accessToken,
    // );
    // if (!user) {
    //   return false;
    // }

    // request.user = user;
    // return true;
  }
}
