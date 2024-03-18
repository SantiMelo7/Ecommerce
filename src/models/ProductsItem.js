import { Schema, model, models } from "mongoose"
import { CategoriesSchema } from "./Categories"

const ProductsItemsSchema = new Schema({

    name: { type: String, required: true },

    images: { type: String, required: true },

    price: { type: String, required: true },

    description: { type: String, required: true },

    category: { type: CategoriesSchema, required: true },

}, { timestamps: true })


export const ProductsItem = models?.ProductsItem || model("ProductsItem", ProductsItemsSchema)