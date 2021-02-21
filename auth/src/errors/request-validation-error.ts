import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Only because we are extending a build in calss
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}