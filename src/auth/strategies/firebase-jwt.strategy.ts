import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { auth } from 'firebase-admin';
import { ExtractJwt, Strategy } from 'passport-firebase-jwt';

import { UnauthorizedAccountException } from '../exceptions';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(token: string) {
    try {
      return await auth().verifyIdToken(token, true);
    } catch (error) {
      throw new UnauthorizedAccountException();
    }
  }
}
