import { Module } from '@nestjs/common';

import { TrpcModule } from './trpc/trpc.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TrpcModule, UserModule],
})
export class AppModule {}
