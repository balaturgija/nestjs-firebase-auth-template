import { ExecutionContext, createParamDecorator } from '@nestjs/common';

interface FirebaseIdentity {
  email: string[];
}
interface Firebase {
  identities: FirebaseIdentity;
}
interface FirebaseRole {
  role: string;
  organizationId: string;
}
export interface FirebaseAccount {
  roles: FirebaseRole[];
  iss: string;
  aud: string;
  auth_time: string;
  user_id: string;
  sub: string;
  iat: number;
  exp: number;
  email: string;
  email_verified: boolean;
  firebase: Firebase;
  sign_in_provider: string;
}

export const AuthAccount = createParamDecorator(
  (_, ctx: ExecutionContext): FirebaseAccount => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
