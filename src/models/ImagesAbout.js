import { Schema, model, models } from "mongoose"

export const ImagesSchema = new Schema({

    images: { type: String, required: true },

}, { timestamps: true })

export const Images = models?.Images || model("images-about", ImagesSchema)