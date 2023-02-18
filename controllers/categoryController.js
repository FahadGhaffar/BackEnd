


import Category from "../models/Category.js";
import { v2 as cloudinary } from 'cloudinary'
import streamifier from "streamifier"
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/index.js";


const createCategory = async (req, res) => {

    req.body.user = req.user.userId;
    const category = await Category.create(req.body);
    res.status(StatusCodes.CREATED).json({ category })
};

const getAllCategory = async (req, res) => {
    const category = await Category.find({});
    res.status(StatusCodes.OK).json({ category, count: category.length })
}

const getSingleCategory = async (req, res) => {
    const { id: categoryId } = req.params;

    const category = await Category.findOne({ _id: categoryId });

    if (!category) {
        throw new NotFoundError(`No Cateogry with Id : ${categoryId}`)

    }

    res.status(StatusCodes.OK).json({ category });

}

const updateCategory = async (req, res) => {

    const { id: catgoryId } = req.params

    const category = await Category.findOneAndUpdate({ _id: catgoryId }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!category) {
        throw new NotFoundError(`No Category with Id : ${catgoryId}`)
    }
    res.status(StatusCodes.OK).json({ category })
}

const deleteCategory = async (req, res) => {

    const { id: categoryId } = req.params;

    const category = await Category.findOne({ _id: categoryId })

    if (!category) {
        throw new NotFoundError(`No Category with Id : ${categoryId}`)
    }
    await category.remove();

    res.status(StatusCodes.OK).json({ msg: 'Success! Product removed.' })
}

const uploadImage = async (req, res) => {
    console.log("hello", req.files.image.data);
    // console.log("hello", req.file.buffer);
    const data = req.files.image.data;
    // Some promise of base64 data
    let uploadFromBuffer = (req) => {

        return new Promise((resolve, reject) => {

            let cld_upload_stream = cloudinary.uploader.upload_stream(
                {
                    folder: "Hackathon"
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

    return res.status(StatusCodes.OK).json({ image: { src: result.url } });




};



export {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
    uploadImage



}