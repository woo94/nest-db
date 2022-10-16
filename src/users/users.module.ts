import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './user.model'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
    /**
     * forFeature() method를 사용하여 현재 scope에 model을 등록시킨다.
     * 이렇게 해야 UserModel을 UsersService에 @InjectModel() decorator를 사용하여 inject 할 수 있다.
     */
    imports: [SequelizeModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [SequelizeModule]
})
export class UsersModule { }