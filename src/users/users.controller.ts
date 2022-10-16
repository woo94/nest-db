import { Controller, Get, Post } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    create() {
        return this.usersService.addOne()
    }

    @Get()
    getAll() {
        return this.usersService.findAll()
    }
}