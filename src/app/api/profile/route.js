import { connectMongoDB } from "@/util/connectMongoDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { UserItem } from "@/models/User";

export async function PUT(req) {
    await connectMongoDB()
    const data = await req.json()
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    await UserItem.updateOne({ email }, data)
    return Response.json(true)

}

export async function GET() {
    await connectMongoDB()
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    return Response.json(
        await UserItem.findOne({ email })
    )
}