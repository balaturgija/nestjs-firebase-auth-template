import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { AuthExceptionFilter } from './filters';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: AuthExceptionFilter,
    },
  ],
})
export class AuthModule {}
