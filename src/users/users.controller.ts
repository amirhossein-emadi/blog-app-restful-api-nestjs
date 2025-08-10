import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

  @Get()
  public getUsers() {
    return 'Getting all users coming soon!';
  }

  @Post()
  public createUsers() {
    return 'Creating a user coming soon!';
  }

}
