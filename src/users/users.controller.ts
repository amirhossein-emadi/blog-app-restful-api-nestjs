import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('{/:id}')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit') limit: any,
  ) {
    console.log(typeof id);
    console.log(id);
    return 'Getting all users coming soon!';
  }

  @Post()
  public createUsers(@Body() request: any) {
    console.log(request);
    return 'Creating a user coming soon!';
  }
}
