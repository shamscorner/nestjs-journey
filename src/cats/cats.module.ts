import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { UsersModule } from 'src/users/users.module';
import { ExceptionFiltersController } from './exception-filters.controller';

@Module({
  imports: [UsersModule],
  controllers: [CatsController, ExceptionFiltersController],
  providers: [CatsService],
})
export class CatsModule {}
