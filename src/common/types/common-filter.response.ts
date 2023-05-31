export interface CommonFilterResponse {
  status: number;
  timestamp: number;
  path: string;
  name: string;
  message?: string | object;
  expiredAt?: string;
}

export class CommonFilterResponse {
  constructor(
    status: number,
    requestUrl: string,
    exceptionName: string,
    message?: string | object,
  ) {
    this.status = status;
    this.timestamp = Date.now();
    this.path = requestUrl;
    this.name = exceptionName;
    this.message = message;
  }
}
