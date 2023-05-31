import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import { auth } from 'firebase-admin';
import { UnauthorizedAccountException } from '../exceptions/unauthorized-account.exception';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(token: any) {
    try {
      return await auth().verifyIdToken(token, true);
    } catch (error) {
      throw new UnauthorizedAccountException();
    }
  }
}
