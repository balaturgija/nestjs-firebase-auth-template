import { ArgumentsHost, Catch } from '@nestjs/common';

import { CommonExceptionFilter } from '~modules/common';

import { UnauthorizedAccountException } from '../exceptions';

@Catch(UnauthorizedAccountException)
export class AuthExceptionFilter extends CommonExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}
