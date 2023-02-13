// const Product = require('../models/Product');
// const { StatusCodes } = require('http-status-codes');
// const CustomError = require('../errors');
// const path = require('path');

import Product from "../models/ProductModel.js"
import { StatusCodes } from "http-status-codes";
import { CustomAPIError, NotFoundError, BadRequestError } from "../errors/index.js";
import path from "path";
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import { log } from "console";


const createProduct = async (req, res) => {
    req.body.user = req.user.userId;
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ product });
};
const getAllProducts = async (req, res) => {
    const products = await Product.find({});

    res.status(StatusCodes.OK).json({ products, count: products.length });
};
const getSingleProduct = async (req, res) => {
    const { id: productId } = req.params;

    const product = await Product.findOne({ _id: productId }).populate('reviews');

    if (!product) {
        throw new NotFoundError(`No product with id : ${productId}`);
    }

    res.status(StatusCodes.OK).json({ product });
};
const updateProduct = async (req, res) => {
    const { id: productId } = req.params;

    const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
        new: true,
        runValidators: true,
    });

    if (!product) {
        throw new NotFoundError(`No product with id : ${productId}`);
    }

    res.status(StatusCodes.OK).json({ product });
};
const deleteProduct = async (req, res) => {
    const { id: productId } = req.params;

    const product = await Product.findOne({ _id: productId });

    if (!product) {
        throw new NotFoundError(`No product with id : ${productId}`);
    }

    await product.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! Product removed.' });
};
// const uploadImage = async (req, res) => {
//     if (!req.files) {
//         throw new BadRequestError('No File Uploaded');
//     }
//     const productImage = req.files.image;

//     if (!productImage.mimetype.startsWith('image')) {
//         throw new BadRequestError('Please Upload Image');
//     }

//     const maxSize = 1024 * 1024;

//     if (productImage.size > maxSize) {
//         throw new BadRequestError(
//             'Please upload image smaller than 1MB'
//         );
//     }

//     const imagePath = path.join(
//         __dirname,
//         '../public/uploads/' + `${productImage.name}`
//     );
//     await productImage.mv(imagePath);
//     res.status(StatusCodes.OK).json({ image: `/uploads/${productImage.name}` });
// };

const uploadImage = async (req, res) => {
    console.log("hello", req.files.image.tempFilePath);
    try {
        const result = await cloudinary.uploader.upload(
            req.files.image.tempFilePath,
            {
                use_filename: true,
                folder: 'Hackathon',
            }
        );
        fs.unlinkSync(req.files.image.tempFilePath);
        return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.BAD_REQUEST).json({ image: { src: "Error" } });
    }

};

export {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage

}