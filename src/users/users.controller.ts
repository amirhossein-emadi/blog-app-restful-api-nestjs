import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id')
  public getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(typeof id);
    console.log(typeof limit);
    return 'Getting all users coming soon!';
  }

  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'Creating a user coming soon!';
  }
}
