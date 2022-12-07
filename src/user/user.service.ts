import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { User } from './user.entity';
import { AuthCredentialsDto } from '../auth/dto/authCredentials.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    super(userRepository);
  }

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<any> {
    const { email, credentials } = authCredentialsDto;    
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(credentials, salt);
    console.log(salt, hashedPassword);
    const user = this.repo.create({ email, credentials: hashedPassword });    
    try {
      await this.repo.save(user);
    } catch (err) {
      throw new HttpException('Error', err);
    }
  }
}
