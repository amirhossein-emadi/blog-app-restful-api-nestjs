import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
} from '@nestjs/common';

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

  @Get('/:id')
  public getUsersById(
    @Param('id') id: any,
    @Query('limit') limit: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(id);
    console.log(limit);
    console.log(headers);
    console.log(ip);
    return 'Getting the user by id coming soon!';
  }
}
