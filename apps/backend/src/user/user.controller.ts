import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { z } from 'zod';

import {
  AllUsersSchema,
  CreateUser,
  CreateUserSchema,
  DeleteUser,
  deleteUserSchema,
  GetUser,
  GetUserSchema,
  UpdateUser,
  UpdateUserSchema,
  UserSchema,
} from './user.schema';
import { UserService } from './user.service';

@Router({ alias: 'user' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Mutation({ input: CreateUserSchema, output: UserSchema })
  create(@Input() userData: CreateUser) {
    console.log('Creating user with data:', userData);

    return this.userService.create(userData);
  }

  // don't do it in ur prod app 😂
  @Query({ output: AllUsersSchema })
  findAll() {
    return this.userService.findAll();
  }

  @Query({ input: GetUserSchema, output: UserSchema })
  findOne(@Input() getUserSchema: GetUser) {
    return this.userService.findOne(getUserSchema);
  }

  @Mutation({ input: UpdateUserSchema, output: UserSchema })
  update(@Input() updatedUserData: UpdateUser) {
    return this.userService.update(updatedUserData);
  }

  @Mutation({
    input: deleteUserSchema,
    output: z.object({ success: z.boolean() }),
  })
  remove(@Input() deleteUserdata: DeleteUser) {
    return this.userService.remove(deleteUserdata);
  }
}
