import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from '../common/utils/ecrypt.util';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);

    if (user && comparePassword(password, user.password)) {
      const { _id, role } = user;
      return { _id, role };
    }

    return null;
  }

  async login(payload: Partial<User>) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
