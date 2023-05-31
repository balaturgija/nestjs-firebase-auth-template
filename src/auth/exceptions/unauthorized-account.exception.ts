import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthorizedAccountException extends HttpException {
  constructor(message = 'Unauthorized exception') {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
