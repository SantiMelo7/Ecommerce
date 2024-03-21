import { Schema, model, models } from "mongoose"

const OrderSchema = new Schema({
    userEmail: { type: String, required: true },
    address: {
        name: { type: String, required: true },
        nameRecipient: { type: String, required: true },
        phone: { type: String, required: true },
        postalCode: { type: String, required: true },
        country: { type: String, required: true },
        streetAddress: { type: String, required: true },
        city: { type: String, required: true },
    },
    cartProducts: { type: Boolean, required: true },
    paid: { type: Boolean, required: true }
}, { timestamps: true })

export const Order = models?.Order || model("order-items", OrderSchema)