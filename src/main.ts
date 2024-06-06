import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Habilitar Cors
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env.PORT || 3000;
  
  await app.listen(port);
}
bootstrap();