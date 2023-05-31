import { ArgumentsHost, Catch } from '@nestjs/common';
import { UnauthorizedAccountException } from './exceptions/unauthorized-account.exception';
import { CommonExceptionFilter } from '../common/filters/common.exception.filter';

@Catch(UnauthorizedAccountException)
export class AuthExceptionFilter extends CommonExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}
