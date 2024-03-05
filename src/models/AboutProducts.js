import { Schema, model, models } from "mongoose"

const AboutsProductsSchema = new Schema({
    images: { type: String, required: true },
}, { timestamps: true })

export const AboutProducts = models?.AboutProducts || model("AboutProducts", AboutsProductsSchema)