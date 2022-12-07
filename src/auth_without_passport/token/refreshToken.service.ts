import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { RefreshToken } from './refreshToken.entity';
import { AuthConfiguration } from '../auth.configuration';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as uuid from 'uuid';
import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';
import { JwtPayload } from './jwt.dto';

@Injectable()
export class RefreshTokenService extends TypeOrmCrudService<RefreshToken> {
  constructor(
    @InjectRepository(RefreshToken) repo,
    @InjectRepository(User) private userRepo: Repository<User>,
    private authConfiguration: AuthConfiguration,
  ) {
    super(repo);
  }

  // public decodeAccessToken(accessToken: string): JwtPayload {
  //   try {
  //     return jwt.verify(accessToken, this.authConfiguration.jwtKey());
  //   } catch (err) {
  //     throw new HttpException('Invalid access token', 403);
  //   }
  // }

//   public async validateAccessToken(accessToken: string): Promise<User> {
//     const decoded: JwtPayload = this.decodeAccessToken(accessToken);
//     return await this.userRepo.findOne({where: { id: decoded.userId }});
//   }

//   public async generateAccessToken(refreshToken: string): Promise<string> {
//     let decoded;
//     try {
//       decoded = jwt.verify(refreshToken, this.authConfiguration.jwtKey());
//     } catch (err) {
//       throw new HttpException('Invalid refresh token', 403);
//     }
//     const refreshTokenEntity = await this.repo.findOne({
//       where: { crossToken: decoded.crossToken },
//     });
//     if (!refreshTokenEntity) {
//       throw new HttpException('Invalid refresh token', 403);
//     }
//     const payload: JwtPayload = {
//       type: 'access',
//       userId: refreshTokenEntity.user.id,
//     };
//     return jwt.sign(payload, this.authConfiguration.jwtKey(), {
//       expiresIn: this.authConfiguration.accessTokenExpire(),
//     });
//   }

//   public async generateRefreshToken(user: User): Promise<string> {
//     const crossToken = uuid.v4();
//     const payload: JwtPayload = {
//       type: 'refresh',
//       crossToken,
//       userId: user.id,
//     };
//     const token = jwt.sign(payload, this.authConfiguration.jwtKey(), {
//       expiresIn: this.authConfiguration.refreshTokenExpire(),
//     });
//     const refreshToken = new RefreshToken();
//     refreshToken.token = await this.hashToken(token);
//     refreshToken.user = user;
//     refreshToken.crossToken = crossToken;
//     refreshToken.expiresAt = new Date(
//       new Date().getTime() + this.authConfiguration.refreshTokenExpire(),
//     );
//     await this.repo.save(refreshToken);
//     return token;
//   }

//   public async hashToken(token: string): Promise<string> {
//     return await bcrypt.hash(token, this.authConfiguration.hashRounds());
//   }
}
