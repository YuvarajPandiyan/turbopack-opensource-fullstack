import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { TrpcPanelController } from './trpc-panel.controller';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: '../../../../packages/trpc-schema/src/backend/@generated',
    }),
  ],
  controllers: [TrpcPanelController],
})
export class TrpcModule {}
