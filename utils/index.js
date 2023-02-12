// const { createJWT, isTokenValid, attachCookiesToResponse } = require('./jwt');
// const createTokenUser = require('./createTokenUser');
// const checkPermissions = require('./checkPermissions');

import { createJWT, isTokenValid, attachCookiesToResponse } from './jwt.js';
import createTokenUser from './createTokenUser.js';
import checkPermissions from './checkPermissions.js';


export {

  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createTokenUser,
  checkPermissions,
}
// module.exports = {
//   createJWT,
//   isTokenValid,
//   attachCookiesToResponse,
//   createTokenUser,
//   checkPermissions,
// };
