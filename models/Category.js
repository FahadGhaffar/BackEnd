import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        require: [true, 'Please provide Category Name'],
        maxlength: [1000, 'category name must be in 1000 characters']
    },
    image: {
        type: String,
        default: '/uploads/example.jpeg',
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},
    { timestamps: true }
    // { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }





)

// CategorySchema.virtual('products', {

//     ref: 'ProdcutModel',
//     localField: '_id',
//     foreignField: 'cateogry',
//     justOne: false
// })

// CategorySchema.pre('remove', async function (next) {
//     await this.model('ProdcutModel').deleteMany({ category: this._id })
// });


export default mongoose.model('Category', CategorySchema)