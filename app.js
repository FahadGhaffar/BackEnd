import * as dotenv from "dotenv";
dotenv.config()
import express from "express";
import bodyParser from "body-parser";
import config from "./constants/config.js";
import { CustomAPIError } from "./errors/index.js"
import { authenticateUser } from "./middleware/authentication.js"
import { isTokenValid } from "./utils/index.js"



const app = express();


import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import rateLimiter from "express-rate-limit";
import helmet from "helmet";
import xss from 'xss-clean';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';

import connectDB from "./db/connect.js";

import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({
    cloud_name: config.cloud_name,
    api_key: config.cloud_api_key,
    api_secret: config.cloud_api_secret,
});

import authRoute from './routers/auth.js'
import userRouter from './routers/userRoute.js';
import productRouter from './routers/productRoute.js';
import reviewRouter from './routers/reviewRoute.js';
import orderRouter from './routers/orderRoute.js';
import categoryRouter from './routers/categoryRoute.js'

import notFound from "./middleware/not-found.js"
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.set('trust proxy', 1);
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000,
        max: 60,
    })
);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser(config.jwt_secret || "secret"));

// app.use(fileUpload({ useTempFiles: true }));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/category', categoryRouter);

// app.use(notFound);
app.use(errorHandlerMiddleware);

app.get("/", (req, res) => {

    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)


    res.json({ "msg": "it is working" })

})

app.get('*', function (req, res) {
    res.send('what???', 404);
});

const PORT = process.env.PORT || 5000;


const start = async () => {


    try {
        await connectDB(config.mongo_connection_uri)
        app.listen(PORT, () => {
            console.log("server is working ")
        })
    } catch (error) {
        console.log(error);
    }
};

start()