import express from 'express';
const router = express.Router();
import {
    authenticateUser,
    authorizePermissions,
} from '../middleware/authentication.js'


import {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
} from '../controllers/reviewController.js'


router.route('/').post(authenticateUser, createReview).get(getAllReviews);

router
    .route('/:id')
    .get(getSingleReview)
    .patch(authenticateUser, updateReview)
    .delete(authenticateUser, deleteReview);

// module.exports = router;
export default router