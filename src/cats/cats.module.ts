import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { UsersModule } from 'src/users/users.module';
import { ExceptionFiltersController } from './exception-filters.controller';
// import { APP_FILTER } from '@nestjs/core';
// import { HttpExceptionFilter } from './filters/http-exception.filter';

@Module({
  imports: [UsersModule],
  controllers: [CatsController, ExceptionFiltersController],
  providers: [
    CatsService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class CatsModule {}
