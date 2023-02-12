import validator from 'validator';
import mongoose, { sanitizeFilter } from 'mongoose';
import bcrypt from 'bcryptjs'


const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, 'PLease Enter your Name'],
        minlength: 3,
        maxlength: 50,

    },

    email: {
        type: String,
        unique: true,
        required: [true, "Please provide email"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide valid email"
        }
    },
    password: {
        type: String,
        required: [true, "Please provide Password"],
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    }


});

UserSchema.pre('save', async function (next) {
    console.log(this.isModified('password'));
    // if (!this.isModified('password')) {
    //     console.log("isModified");
    //     return;
    // }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch

}


export default mongoose.model('User', UserSchema)
// module.exports = mongoose.model('User', UserSchema)