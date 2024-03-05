import { Schema, model, models } from "mongoose"

export const CategoriesSchema = new Schema({

    name: { type: String, required: true },

}, { timestamps: true })

export const Categories = models?.Categories || model("Categories", CategoriesSchema)