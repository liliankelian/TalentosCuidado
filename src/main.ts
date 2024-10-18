import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.register({
      driver: 'in-database',
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: false, // Retorna 404 se o payload não atender as regras do DTO
      whitelist: true, // Remove campos que não estão no DTO
      transform: true, // Transforma os campos para o tipo especificado no DTO
    }),
  );

  const config = new DocumentBuilder()
  .setTitle('Talentos do Cuidado')
  .setDescription('API talentosos')
  .setVersion('1.0')
//  .addTag('talentosos')
  .build();
  
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);


  await app.listen(3000);
}
bootstrap();
