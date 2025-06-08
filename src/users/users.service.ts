import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [
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
    console.log('Creating user:', createUserDto);
    this.users.push(createUserDto);
    return 'This action adds a new user ' + createUserDto.fullName;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return (
      this.users.find((user) => user.id === id) ||
      `User with id ${id} not found`
    );
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
