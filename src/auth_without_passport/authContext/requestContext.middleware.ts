import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as httpContext from 'express-http-context';
import { RefreshTokenService } from '../token/refreshToken.service';
import { RequestContextProvider } from './requestContext.provider';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  constructor(
    private requestContextProvider: RequestContextProvider,
    private refreshTokenService: RefreshTokenService,
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    httpContext.middleware(req, res, () => {
      if (req.headers.authorization) {
        const [, token] = req.headers.authorization.split(' ');
        // const decoded = this.refreshTokenService.decodeAccessToken(token);
        // this.requestContextProvider.setAuth(decoded);
      }
      next();
    });
  }
}
