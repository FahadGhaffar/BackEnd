// const { StatusCodes } = require('http-status-codes');
// const CustomAPIError = require('./custom-api');
import CustomAPIError from './custom-api.js'

import { StatusCodes } from 'http-status-codes'

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}


export default UnauthenticatedError;
// module.exports = UnauthenticatedError;
