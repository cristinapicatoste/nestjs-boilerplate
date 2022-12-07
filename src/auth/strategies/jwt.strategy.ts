import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';
import { JwtPayload } from '../types/jwt-payload.interface';
import { Repository } from 'typeorm';
import { User } from '../../user/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_KEY, //jwtConstants.secret,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { userId } = payload;
    const user: User = await this.userRepo.findOne({where: { id: userId }});
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
