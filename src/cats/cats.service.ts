import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(private readonly usersService: UsersService) {}

  create(cat: Cat) {
    // get the authenticated user
    const user = this.usersService.findOne(cat.userId);
    console.log('Authenticated User:', user);
    const userId = user.id;
    this.cats.push({ ...cat, userId });
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
