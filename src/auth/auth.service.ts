import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { AuthConfiguration } from './auth.configuration';
import { User } from '../user/user.entity';
import { AuthCredentialsDto } from './dto/authCredentials.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtPayload } from './types/jwt-payload.interface';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private readonly userService: UserService,
    private authConfiguration: AuthConfiguration,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne({where: {email: email}});
    if (user) {
      const result = await AuthService.verifyCredential(user, pass);
      if (result && user.credentials === pass) {
        return user;
      }
    }
    return undefined;
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userService.createUser(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<{ access_token: string }> {
    const { email, credentials } = authCredentialsDto;
    const user = await this.userRepo.findOneBy({email})
    if (user && bcrypt.compare(credentials, user.credentials)) {
      const payload: JwtPayload = { userId: user.id };
      const access_token = this.jwtService.sign(payload);
      return { access_token }
    } else {
      throw new UnauthorizedException('Incorrect password');
    }
  }

  public async hashCredential(credential: string): Promise<string> {
    return await bcrypt.hash(credential, this.authConfiguration.hashRounds());
  }

  static async verifyCredential(user: User, inputCredential: string): Promise<boolean> {
    return await bcrypt.compare(inputCredential, user.credentials);
  }

}
