// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'
import config from '../constants/config.js';

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, config.jwt_secret, {
    expiresIn: config.jwt_Lifetime || '30d',
  });
  return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, config.jwt_secret);

const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT({ payload: user });

  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    // secure: config.node_env === 'production',
    signed: true,
  });
  return token;
};


export {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
}

// module.exports = {
//   createJWT,
//   isTokenValid,
//   attachCookiesToResponse,
// };
