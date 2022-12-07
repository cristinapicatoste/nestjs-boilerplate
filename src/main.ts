import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AbstractEntity } from './common/AbstractEntity';
import { AbstractUserOwnedEntity } from './common/AbstractUserOwnedEntity';

dotenv.config({ path: '.env.dev' });
const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dhana')
    .setDescription('The Dhana API')
    .setVersion('1.0')
    .addTag('dhana')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'access-token',
    )
    .build();
    
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [AbstractUserOwnedEntity, AbstractEntity],
  });
  SwaggerModule.setup('docs', app, document);

  await app.listen(port);
}
bootstrap();
