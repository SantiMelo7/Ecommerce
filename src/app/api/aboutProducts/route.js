import { ImagesSchema } from "@/models/ImagesAbout"
import { connectMongoDB } from "@/util/connectMongoDB"

export async function POST(req) {
    await connectMongoDB()
    const data = await req.json()
    const doc = await ImagesSchema.create(data)
    return Response.json(doc)
}

export async function GET() {
    await connectMongoDB()
    const doc = await ImagesSchema.find()
    return Response.json(doc)
}

export async function DELETE(req) {
    await connectMongoDB()
    const url = new URL(req.url)
    const _id = url.searchParams.get("_id")
    await ImagesSchema.deleteOne({ _id })
    return Response.json(true)
}