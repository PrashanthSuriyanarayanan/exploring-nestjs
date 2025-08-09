import { Body, Controller, Delete, Get, Param, Post, Put, Redirect } from '@nestjs/common';
import { TrimTrailingWhitespacesPipe } from 'src/common/pipes/trimTrailingWhitespaces.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    create(@Body() user: CreateUserDto) {
        return this.usersService.create(user);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get('list')
    @Redirect('/users', 302)
    oldFindAll() {
        return { url: '/users', statusCode: 302}
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: UpdateUserDto, @Body("name", TrimTrailingWhitespacesPipe) name: string) {
        return this.usersService.update(+id, { ...user, name });
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersService.delete(+id);
    }
}
