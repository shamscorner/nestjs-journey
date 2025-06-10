import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { logger as LoggerMiddleware } from './logger/logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [UsersModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     // consumer.apply(LoggerMiddleware).forRoutes({
//     //   path: 'cats',
//     //   method: RequestMethod.GET,
//     // });
//     // consumer.apply(LoggerMiddleware, AnotherMiddleware).forRoutes(CatsController);
//     consumer.apply(LoggerMiddleware).forRoutes(CatsController);
//     // consumer
//     //   .apply(LoggerMiddleware)
//     //   .exclude(
//     //     { path: 'cats', method: RequestMethod.GET },
//     //     { path: 'cats', method: RequestMethod.POST },
//     //     'cats/{*splat}',
//     //   )
//     //   .forRoutes(CatsController);
//   }
// }
