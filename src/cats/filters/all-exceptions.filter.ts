import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    // You can add custom logic here, such as logging the exception
    console.error('An unhandled exception occurred:', exception);
    super.catch(exception, host);
  }
}
