import { ProductsItem } from "@/models/ProductsItem"
import { connectMongoDB } from "@/util/connectMongoDB"

export async function POST(req) {
    await connectMongoDB()
    const data = await req.json()
    const doc = await ProductsItem.create({ data })
    return Response.json({ doc })
}

export async function PUT(req) {
    await connectMongoDB()
    const { _id, name } = await req.json()
    await ProductsItem.updateOne({ _id }, { name })
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