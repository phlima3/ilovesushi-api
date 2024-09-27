import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Verifique se há um prefixo global definido
  // app.setGlobalPrefix('api'); // Comente ou ajuste conforme necessário

  app.enableCors({
    origin: 'http://localhost:3000', // Atualize conforme seu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3001);
  console.log('Aplicação rodando em: http://localhost:3001');
}
bootstrap();
