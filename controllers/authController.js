

import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'

import { CustomAPIError, BadRequestError, UnauthenticatedError } from '../errors/index.js'

import { attachCookiesToResponse, createTokenUser } from '../utils/index.js'


const register = async (req, res) => {

    const { email, name, password } = req.body;

    const emailALreadyExists = await User.findOne({ email });
    if (emailALreadyExists) {
        throw new BadRequestError('Email already exists');
    }

    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? 'admin' : 'user';

    const user = await User.create({ name, email, password, role });
    const tokenUser = createTokenUser(user);
    const gettokent = attachCookiesToResponse({ res, user: tokenUser });
    res.status(StatusCodes.CREATED).json({ token: gettokent, user: tokenUser })


};

const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError("please provide valid Email or password")
    }
    const user = await User.findOne({ email });

    if (!user) {
        throw new UnauthenticatedError("Invalid Credentail")

    }
    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("Invalid Credential")
    }
    const tokenUser = createTokenUser(user);
    const gettokent = attachCookiesToResponse({ res, user: tokenUser });

    res.status(StatusCodes.OK).json({ token: gettokent, user: tokenUser })


};


const logout = async (req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now() + 1000),
    })
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' })
}
export {
    register,
    login,
    logout,
}
