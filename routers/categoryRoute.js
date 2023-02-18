
import express from 'express';
const router = express.Router();

import {
    authenticateUser,
    authorizePermissions
} from '../middleware/authentication.js'


import {

    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
    uploadImage

} from '../controllers/categoryController.js'


router.route('/')
    .post([authenticateUser, authorizePermissions('admin')], createCategory)
    .get(getAllCategory)


router
    .route('/uploadImage')
    .post([authenticateUser, authorizePermissions('admin')], uploadImage)


router
    .route('/:id')
    .get(getSingleCategory)
    .patch([authenticateUser, authorizePermissions('admin')], updateCategory)
    .delete([authenticateUser, authorizePermissions('admin')], deleteCategory)



export default router