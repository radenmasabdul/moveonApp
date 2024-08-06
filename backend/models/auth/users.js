import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username cannot be empty"],
        unique: [true, "username is already in use"]
    },
    email: {
        type: String,
        required: [true, "email cannot be empty"],
        unique: [true, "email is already in use"],
        validate: {
            validator: validator.isEmail,
            messages: "input must be in email format"
        }
    },
    password: {
        type: String,
        required: [true, "password cannot be empty"],
        minLength: 6
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    }
})

userSchema.methods.comparePassword = async function (reqPassword) {
    return await bcrypt.compare(reqPassword, this.password)
}

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const users = mongoose.model("users", userSchema)

export default users