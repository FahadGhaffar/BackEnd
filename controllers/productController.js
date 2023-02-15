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
import pkg from 'imgbb-uploader';
const { imgbbUploader } = pkg;
import streamifier from "streamifier"

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

// const uploadImage = async (req, res) => {
//     console.log("hello", req.files.image.data);
//     try {
//         const result = await cloudinary.uploader.upload(
//             req.files.image.tempFilePath,
//             {
//                 use_filename: true,
//                 folder: 'Hackathon',
//             }
//         );
//         fs.unlinkSync(req.files.image.tempFilePath);
//         return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
//     } catch (error) {
//         console.log(error);
//         return res.status(StatusCodes.BAD_REQUEST).json({ image: { src: "Error" } });
//     }

// };

// const uploadImage = async (req, res) => {
//     console.log("hello", req.files.image.data);
//     const data = req.files.image.data;
//     // Some promise of base64 data
//     const bufferToBase64 = (buffer) =>
//         new Promise((resolve) => {
//             const buff = new Buffer(buffer);
//             const base64string = buff.toString("base64"); // https://nodejs.org/api/buffer.html#buftostringencoding-start-end
//             return setTimeout(() => {
//                 resolve(base64string);
//             }, 1000);
//         });

//     // Some async function
//     const getDisplayUrl = async (buffer, name = "Default-filename") => {
//         return await imgbbUploader({
//             apiKey: "",
//             base64string: await bufferToBase64(buffer),
//             name,
//         })
//             .then((res) => {
//                 console.log(`Handle success: ${res.url}`);
//                 return res.url;
//             })
//             .catch((e) => {
//                 console.error(`Handle error: ${e}`);
//                 return "http://placekitten.com/300/300";
//             });
//     };

//     const myUrl = getDisplayUrl(data, "Dolunay_Obruk-Sama_<3");

//     return res.status(StatusCodes.OK).json({ image: { src: myUrl } });


//     // try {
//     //     const result = await cloudinary.uploader.upload(
//     //         req.files.image.tempFilePath,
//     //         {
//     //             use_filename: true,
//     //             folder: 'Hackathon',
//     //         }
//     //     );
//     //     fs.unlinkSync(req.files.image.tempFilePath);
//     //     return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
//     // } catch (error) {
//     //     console.log(error);
//     //     return res.status(StatusCodes.BAD_REQUEST).json({ image: { src: "Error" } });
//     // }

// };


const uploadImage = async (req, res) => {
    console.log("hello", req.files.image.data);
    // console.log("hello", req.file.buffer);
    const data = req.files.image.data;
    // Some promise of base64 data
    let uploadFromBuffer = (req) => {

        return new Promise((resolve, reject) => {

            let cld_upload_stream = cloudinary.uploader.upload_stream(
                {
                    folder: "foo"
                },
                (error, result) => {

                    if (result) {
                        resolve(result);
                    } else {
                        reject(error);
                    }
                }
            );

            streamifier.createReadStream(req.files.image.data).pipe(cld_upload_stream);
        });

    };

    let result = await uploadFromBuffer(req);

    return res.status(StatusCodes.OK).json({ image: { src: result } });


    // try {
    //     const result = await cloudinary.uploader.upload(
    //         req.files.image.tempFilePath,
    //         {
    //             use_filename: true,
    //             folder: 'Hackathon',
    //         }
    //     );
    //     fs.unlinkSync(req.files.image.tempFilePath);
    //     return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
    // } catch (error) {
    //     console.log(error);
    //     return res.status(StatusCodes.BAD_REQUEST).json({ image: { src: "Error" } });
    // }

};

export {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    uploadImage

}