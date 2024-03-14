import { Schema, model, models } from "mongoose"

const OrderSchema = new Schema({
    phone: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
}, { timestamps: true })

export const Order = models?.Order || model("order-items", OrderSchema)