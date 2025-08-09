import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TrimTrailingWhitespacesPipe } from './common/pipes/trimTrailingWhitespaces.pipe';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.useGlobalPipes(new TrimTrailingWhitespacesPipe());

  app.useGlobalInterceptors(new LoggingInterceptor());

  // Yet to test the browser behavior
  app.enableCors({
    origin: ['http://nest-poc.com:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

