import { Schema, model, models } from "mongoose"
import { UserSchema } from "./User"
const OrderSchema = new Schema({
    orderUser: { type: UserSchema, required: true },
    cartProducts: { type: Object, required: true },
}, { timestamps: true })

export const Order = models?.OrderItems || model("OrderItems", OrderSchema)