const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    admin: { type: Boolean, required: true }
}, { timestamps: true })

export const UserItem = mongoose.models?.UserItemGoogle || mongoose.model("UserItemGoogle", UserSchema)