import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { envConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CommonModule } from './common/common.module';
import { LinksModule } from './links/links.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfiguration],
      validationSchema: JoiValidationSchema,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL || ''),
    CommonModule,
    LinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
