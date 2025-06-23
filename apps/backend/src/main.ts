import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3001);
}

bootstrap()
  .then(() => {
    console.log('backend server successfully started');
  })
  .catch(() => {
    console.log('backend server  started');
  });
