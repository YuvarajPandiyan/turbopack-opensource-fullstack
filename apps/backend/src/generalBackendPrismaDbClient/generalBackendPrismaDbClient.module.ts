import { Module } from '@nestjs/common';
import { PrismaDatabaseService } from './generalBackendPrismaDbClient.service';

@Module({
  exports: [PrismaDatabaseService],
  providers: [PrismaDatabaseService],
})
export class PrismaDatabaseModule {}
