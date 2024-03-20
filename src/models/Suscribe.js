import { Schema, model, models } from "mongoose"

const SubscribeSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
}, { timestamps: true })

export const SubscribeItem = models?.suscribeItem || model("suscribeItem", SubscribeSchema)