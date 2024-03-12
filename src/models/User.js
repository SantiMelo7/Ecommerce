const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true }
}, { timestamps: true })

export const UserItem = mongoose.models?.UserItemGoogle || mongoose.model("UserItemGoogle", UserSchema)