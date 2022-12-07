import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/user.entity';
import { AuthConfiguration } from './auth.configuration';
import { RefreshTokenService } from './token/refreshToken.service';

@Injectable()
export class AuthService {
  constructor(
      private userService: UserService,
      private authConfiguration: AuthConfiguration,
    ) {}

  async validateUser(userId: string, pass: string): Promise<any> {
    const user = await this.userService.findOne({where: {id: userId}});
    // this.verifyCredential(user, pass)

    if (user && user.credentials === pass) {
      const { credentials, ...result } = user;
      return result;
    }
    return null;
  }

//   public async authenticateUser(email:string, credentials:string):Promise<User|undefined> {
    
//     const user = await this.userService.findUserByEmail(email);
//     if (user) {
//       const result = await AuthService.verifyCredential(user, credentials);
//       if (result) {
//         return user;
//       }
//     }
//     return undefined;
//   }

//   public async authenticateUserForRefreshToken(
//     email: string,
//     credentials: string,
//   ): Promise<string | undefined> {
//     const user = await this.authenticateUser(email, credentials);
//     if (user) {
//       return await this.RefreshTokenService.generateRefreshToken(user);
//     }
//     return undefined;
//   }

  public async hashCredential(credential: string): Promise<string> {
    return await bcrypt.hash(credential, this.authConfiguration.hashRounds());
  }

  static async verifyCredential(user: User, inputCredential: string): Promise<boolean> {
    return await bcrypt.compare(inputCredential, user.credentials);
  }
}