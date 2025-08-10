import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers(@Query() query: any) {
    console.log(query);
    return 'Getting all users coming soon!';
  }

  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'Creating a user coming soon!';
  }

  @Get('/:id{/:city}')
  public getUsersById(@Param() params: any) {
    console.log(params);
    return 'Getting the user by id coming soon!';
  }
}
