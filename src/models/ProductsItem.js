import { Schema, model, models } from "mongoose"
import { CategoriesSchema } from "./Categories"

const ProductsItemsSchema = new Schema({
    name: String,
    images: String,
    price: String,
    description: String,
    category: CategoriesSchema,
}, { timestamps: true })

export const ProductsItem = models?.ProductsItem || model("ProductsItem", ProductsItemsSchema)