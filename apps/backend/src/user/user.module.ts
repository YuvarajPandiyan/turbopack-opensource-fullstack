import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [UserService, UserController],
})
export class UserModule {}
