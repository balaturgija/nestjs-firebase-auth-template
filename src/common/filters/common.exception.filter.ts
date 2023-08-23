import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';

import { CommonFilterResponse, isResponseObject } from '../types';

export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const filterResponse = new CommonFilterResponse(
      status,
      request.url,
      exception.name,
      exceptionResponse,
    );

    if (isResponseObject(exceptionResponse)) {
      filterResponse.message = exceptionResponse.message;
    }

    response.status(status).send(filterResponse);
  }
}
