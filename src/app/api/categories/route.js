import { Categories } from "@/models/Categories"
import { connectMongoDB } from "@/util/connectMongoDB"

export async function POST(req) {
    await connectMongoDB()
    const { name } = await req.json()
    const doc = await Categories.create({ name })
    return Response.json({ doc })
}

export async function PUT(req) {
    await connectMongoDB()
    const { _id, name } = await req.json()
    await Categories.updateOne({ _id }, { name })
    return Response.json(true)
}

export async function GET() {
    await connectMongoDB()
    return Response.json(await Categories.find())
}

export async function DELETE(req) {
    await connectMongoDB()
    const url = new URL(req.url)
    const _id = url.searchParams.get("_id")
    await Categories.deleteOne({ _id })
    return Response.json(true)
}