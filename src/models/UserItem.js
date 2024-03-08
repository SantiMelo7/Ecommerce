import { Schema, model, models } from "mongoose"

const UserItemsSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true }
}, { timestamps: true })

export const UserItem = models?.UserItem || model("users-page", UserItemsSchema)