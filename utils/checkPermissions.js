// const CustomError = require('../errors');
import { CustomAPIError, UnauthorizedError } from '../errors/index.js';

const chechPermissions = (requestUser, resourceUserId) => {
  // console.log(requestUser);
  // console.log(resourceUserId);
  // console.log(typeof resourceUserId);
  if (requestUser.role === 'admin') return;
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new UnauthorizedError(
    'Not authorized to access this route'
  );
};

export default chechPermissions;
// module.exports = chechPermissions;
