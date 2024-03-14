import { UserItem } from "@/models/User"
import { connectMongoDB } from "@/util/connectMongoDB"

export async function GET() {
    await connectMongoDB()
    const users = await UserItem.find()
    return Response.json(users)
}