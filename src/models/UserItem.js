import { Schema, model, models } from "mongoose"

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    admin: { type: Boolean, required: true },
}, { timestamps: true })

export const UserItem = models?.UserItem || model("user", UserSchema)