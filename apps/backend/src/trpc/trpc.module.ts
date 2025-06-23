import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { join } from 'path';

import { TrpcPanelController } from './trpc-panel.controller';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: join(
        __dirname,
        '../../../../packages/trpc-schema/backend/@generated',
      ),
    }),
  ],
  controllers: [TrpcPanelController],
})
export class TrpcModule {}
