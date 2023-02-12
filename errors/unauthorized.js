// const { StatusCodes } = require('http-status-codes');
// const CustomAPIError = require('./custom-api');

import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './custom-api.js'

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

export default UnauthorizedError
// module.exports = UnauthorizedError;
