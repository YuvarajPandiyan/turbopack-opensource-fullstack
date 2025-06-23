import { Injectable } from '@nestjs/common';
import { uuidV7 } from '@repo/utils';
import { TRPCError } from '@trpc/server';

import {
  CreateUser,
  DeleteUser,
  GetUser,
  UpdateUser,
  User,
} from './user.schema';

@Injectable()
export class UserService {
  private users: User[] = [];
  create(createUser: CreateUser): User {
    const uuid: string = uuidV7() as string;
    const newUser: User = {
      id: uuid,
      ...createUser,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.users.push(newUser);
    console.log('Creating user with data:', { newUser, uuid });

    return newUser;
  }

  findOne(getUserSchema: GetUser) {
    if (getUserSchema.id) {
      const user = this.users.find((user) => user.id === getUserSchema.id);
      if (user) {
        return user;
      }
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `User with id ${getUserSchema.id} not found`,
      });
    }
  }

  findAll() {
    return this.users;
  }

  update(updatedUser: UpdateUser) {
    if (!updatedUser.id) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'User ID is required for update',
      });
    }

    const userIndex = this.users.findIndex(
      (user) => user.id === updatedUser.id,
    );
    if (userIndex === -1) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `User with id ${updatedUser.id} not found`,
      });
    }
    const user = this.users[userIndex];
    // const updatedUserData: User = {
    //   ...user,
    //   ...updatedUser,
    //   updatedAt: Date.now(),
    // };
    // this.users[userIndex] = updatedUserData;
    return updatedUser;
  }

  remove(deleteUserdata: DeleteUser) {
    if (!deleteUserdata.id) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: 'User ID is required for deletion',
      });
    }

    const userIndex = this.users.findIndex(
      (user) => user.id === deleteUserdata.id,
    );
    if (userIndex === -1) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `User with id ${deleteUserdata.id} not found`,
      });
    }
    this.users.splice(userIndex, 1);
    return { success: true };
  }
}
