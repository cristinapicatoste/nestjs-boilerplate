import { Body, Controller, Get, HttpException, Param, Post, UseGuards } from "@nestjs/common";
import { AuthService } from './auth.service';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { RefreshTokenService } from "./token/refreshToken.service";
import { NoAuth } from "./auth.decorator";
// import { RefreshTokenService } from './refreshToken.service';
// import { NoAuth, ReqUser } from './auth.decorator';
// import { Role, User } from "../users/user.entity";

export class AuthenticateRequest {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
interface AuthenticateResponse {
  refreshToken: string;
  accessToken: string;
}

interface RefreshRequest {
  refreshToken: string;
}
interface RefreshResponse {
  accessToken: string;
}

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private refreshTokenService: RefreshTokenService,
  ) {}

//   @Post('/login')
//   @NoAuth()
//   async authenticate(
//     @Body() request: AuthenticateRequest,
//   ): Promise<AuthenticateResponse> {
//     const refreshToken = await this.authService.authenticateUserForRefreshToken(
//       request.email,
//       request.password,
//     );
//     if (refreshToken) {
//       const accessToken = await this.refreshTokenService.generateAccessToken(
//         refreshToken,
//       );
//       return {
//         refreshToken,
//         accessToken,
//       };
//     }
//     throw new HttpException('Unauthorized Credentials', 403);
//   }

  // @Post('/refresh')
  // @NoAuth()
  // async refresh(@Body() request: RefreshRequest): Promise<RefreshResponse> {
  //   const access = await this.refreshTokenService.generateAccessToken(
  //     request.refreshToken,
  //   );
  //   return {
  //     accessToken: access,
  //   };
  // }
}
