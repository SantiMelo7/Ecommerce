import { AboutProducts } from "@/models/AboutProducts"
import { connectMongoDB } from "@/util/connectMongoDB"

export async function POST(req) {
    await connectMongoDB()
    const data = await req.json()
    const doc = await AboutProducts.create(data)
    return Response.json(doc)
}

export async function GET() {
    await connectMongoDB()
    const doc = await AboutProducts.find()
    return Response.json(doc)
}

export async function DELETE(req) {
    await connectMongoDB()
    const url = new URL(req.url)
    const _id = url.searchParams.get("_id")
    await AboutProducts.deleteOne({ _id })
    return Response.json(true)
}