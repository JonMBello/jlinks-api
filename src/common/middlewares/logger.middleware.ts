import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    this.logger.verbose(`>>> ${method} ${originalUrl}`);

    res.on('finish', () => {
      const { statusCode } = res;
      const elapsedTime = Date.now() - startTime;

      this.logger.verbose(
        `<<< ${method} ${originalUrl} ${statusCode} - ${elapsedTime}ms`,
      );
    });

    next();
  }
}
