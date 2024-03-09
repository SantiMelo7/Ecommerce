import { Schema, model, models } from "mongoose"

const OrderSchema = new Schema({
    userEmail: { type: String },
    phone: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    cartProducts: { type: Object },
}, { timestamps: true })

export const Order = models?.Order || model("order-items", OrderSchema)