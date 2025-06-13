import {
  BadRequestException,
  // BadRequestException,
  Controller,
  ForbiddenException,
  Get,
  // HttpException,
  // HttpStatus,
  Post,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';
// import { CatchEverythingFilter } from './filters/catch-everything.filter';
// import { CustomForbiddenException } from './exceptions/forbidden.exception';

@Controller('exception-filters')
// @UseFilters(HttpExceptionFilter)
export class ExceptionFiltersController {
  @Get('test-exception')
  testException() {
    // throw new Error('This is a test exception');
    throw new BadRequestException();
  }

  @Post('forbidden-access')
  // @UseFilters(new HttpExceptionFilter()) // instance of filter
  // @UseFilters(HttpExceptionFilter) // class way
  // @UseFilters(CatchEverythingFilter)
  forbiddenAccess() {
    // throw new HttpException('Forbidden access!', 403);

    // throw new HttpException('Forbidden access!', HttpStatus.FORBIDDEN);

    // throw new HttpException(
    //   {
    //     error: 'Forbidden access!',
    //     message: 'You do not have permission to access this resource.',
    //     timestamp: new Date().toISOString(),
    //     // ...
    //   },
    //   HttpStatus.FORBIDDEN,
    // );

    // try {
    //   // database logic
    //   // more checkes whether the user has the correct permissions, etc.
    //   throw new Error('User is not authenticated');
    // } catch (error) {
    //   throw new HttpException('You do not have access!', HttpStatus.FORBIDDEN, {
    //     cause: error,
    //   });
    // }

    // custom exception
    // 'You are not allowed to access this resource',
    // throw new CustomForbiddenException();

    throw new ForbiddenException();

    // try {
    //   throw new Error('User is not authenticated');
    // } catch (error) {
    //   throw new ForbiddenException('Forbidden access!', {
    //     cause: error, // optional
    //     description: 'User is not authorized to access this resouce',
    //   });
    // }

    // throw new BadRequestException();
  }
}
