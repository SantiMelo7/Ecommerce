import { UserItem } from "@/models/User"
import { connectMongoDB } from "@/util/connectMongoDB"

export async function GET() {
    await connectMongoDB()
    const users = await UserItem.find()
    return Response.json(users)
}

export async function DELETE(req) {
    await connectMongoDB()
    const url = new URL(req.url)
    const _id = url.searchParams.get("_id")
    await ProductsItem.deleteOne({ _id })
    return Response.json(true)
}