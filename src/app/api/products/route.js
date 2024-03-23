import { ProductsItem } from "@/models/ProductsItem"
import { connectMongoDB } from "@/util/connectMongoDB"

export async function POST(req) {
    await connectMongoDB()
    const data = await req.json()
    const newData = {
        name: data.name,
        images: data.images,
        price: data.price,
        description: data.description,
        category: {
            name: data.category

        }
    };
    const doc = await ProductsItem.create(newData)
    return Response.json(doc)
}

export async function PUT(req) {
    await connectMongoDB()
    const data = await req.json()
    const newData = {
        _id: data._id,
        name: data.name,
        images: data.images,
        price: data.price,
        description: data.description,
        category: {
            name: data.category

        }
    };
    await ProductsItem.updateOne(newData)
    return Response.json(true)
}

export async function GET() {
    await connectMongoDB()
    const doc = await ProductsItem.find()
    return Response.json(doc)
}

export async function DELETE(req) {
    await connectMongoDB()
    const url = new URL(req.url)
    const _id = url.searchParams.get("_id")
    await ProductsItem.deleteOne({ _id })
    return Response.json(true)
}