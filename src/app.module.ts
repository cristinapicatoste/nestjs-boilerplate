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
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { PassportModule } from '@nestjs/passport';

dotenv.config({ path: '.env.dev' });

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: process.env.AUTH_ACCESS_EXPIRE },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST, // 'localhost' o 127.0.0.1,
      port: parseInt(process.env.POSTGRES_PORT), // 5432,
      username: process.env.POSTGRES_USER, 
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true, // only if we don't have migrations
    }),
    TypeOrmModule.forFeature([
      User,
    ]),
  ],
  controllers: [
    UserController,
    AuthController
  ],
  providers: [
    UserService,
    AuthService, 
    AuthConfiguration,
    ConfigService,
    LocalStrategy, 
    JwtStrategy
  ],
})
export class AppModule {}