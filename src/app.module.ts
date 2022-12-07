import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthConfiguration } from './auth/auth.configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { typeormOptions } from './typeormconfig';

dotenv.config({ path: '.env.dev' });

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: process.env.AUTH_ACCESS_EXPIRE },
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeormOptions),
    TypeOrmModule.forFeature([User])
  ],
  exports: [TypeOrmModule],
  controllers: [UserController, AuthController],
  providers: [
    UserService,
    AuthService,
    AuthConfiguration,
    ConfigService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AppModule {}
