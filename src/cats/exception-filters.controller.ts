import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';

@Controller('exception-filters')
export class ExceptionFiltersController {
  @Get('test-exception')
  testException() {
    throw new Error('This is a test exception');
  }

  @Post('forbidden-access')
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

    try {
      // database logic
      // more checkes whether the user has the correct permissions, etc.
      throw new Error('User is not authenticated');
    } catch (error) {
      throw new HttpException('You do not have access!', HttpStatus.FORBIDDEN, {
        cause: error,
      });
    }
  }
}
