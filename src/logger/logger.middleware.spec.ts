import { logger as LoggerMiddleware } from './logger.middleware';

describe('LoggerMiddleware', () => {
  it('should be defined', () => {
    // expect(new LoggerMiddleware()).toBeDefined();
    expect(LoggerMiddleware).toBeDefined();
  });
});
