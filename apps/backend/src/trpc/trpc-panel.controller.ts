import { renderTrpcPanel } from '@extendslcc/trpc-panel';
import { All, Controller, Inject, OnModuleInit } from '@nestjs/common';
import { AnyRouter } from '@trpc/server';
import { AppRouterHost } from 'nestjs-trpc';

@Controller()
export class TrpcPanelController implements OnModuleInit {
  // This controller can be used to handle TRPC panel related requests.
  // You can define methods here to handle specific routes or actions.
  // For example, you might want to add methods for managing TRPC panels,
  // fetching data, etc.

  private appRouter!: AnyRouter;
  constructor(
    @Inject(AppRouterHost) private readonly appRouterHost: AppRouterHost,
  ) {}
  onModuleInit() {
    this.appRouter = this.appRouterHost.appRouter;
  }

  @All('/trpc-playground')
  trpcPanel() {
    return renderTrpcPanel(this.appRouter, {
      url: 'http://localhost:3001/trpc',
    });
  }
}
