import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

import { GeneralBackendPrismaDbClient } from '@repo/general-backend-db';

// don't touch this until you have to some changes in the prisma connect.
@Injectable()
export class PrismaDatabaseService
  extends GeneralBackendPrismaDbClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
