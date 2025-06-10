import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john@example.com',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane@example.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    const user: User = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log('Updating user with id:', id, 'to:', updateUserDto);
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return `User with id ${id} not found`;
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return this.users[userIndex];
  }

  remove(id: number) {
    if (!this.users.some((user) => user.id === id)) {
      return `User with id ${id} not found`;
    }
    this.users = this.users.filter((user) => user.id !== id);
    return;
  }
}
