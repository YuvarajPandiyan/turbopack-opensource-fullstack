import { Module } from '@nestjs/common';

import { TrpcModule } from './trpc/trpc.module';
import { UserModule } from './user/user.module';
import { PrismaDatabaseModule } from './generalBackendPrismaDbClient/generalBackendPrismaDbClient.module';

// i feel ordering in this way should be good
// 1. 1st DB mount
// 2. Trpc server then rest of the procedures.
@Module({
  imports: [PrismaDatabaseModule, TrpcModule, UserModule],
})
export class AppModule {}
