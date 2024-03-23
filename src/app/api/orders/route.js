import { connectMongoDB } from "@/util/connectMongoDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { UserItem } from "@/models/User";
import { Order } from "@/models/Order";

export async function GET(req) {
    await connectMongoDB()
    const session = await getServerSession(authOptions)
    const userEmail = session?.user?.email
    console.log(userEmail)
    let isAdmin = false
    const url = new URL(req.url)
    const _id = url.searchParams.get("_id")
    if (_id) {
        return Response.json(await Order.findById(_id))
    }
    if (userEmail) {
        const user = await UserItem.findOne({ email: userEmail })
        if (user) {
            isAdmin = user.admin
        }
    }

    if (isAdmin) {
        return Response.json(await Order.find())
    }
    if (userEmail) {
        return Response.json(await Order.find({ userEmail }))
    }
}