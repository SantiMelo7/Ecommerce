import { Schema, model, models } from "mongoose"
const OrderSchema = new Schema({
    userEmail: { type: String, required: true },
    orderUser: {
        name: { type: String, required: true },
        nameRecipient: { type: String, required: true },
        phone: { type: String, required: true },
        postalCode: { type: String, required: true },
        city: { type: String, required: true },
        streetAddress: { type: String, required: true },
        country: { type: String, required: true },
    },
    cartProducts: { type: Object, required: true },
}, { timestamps: true })

export const Order = models?.OrderCheckout || model("OrderCheckout", OrderSchema)