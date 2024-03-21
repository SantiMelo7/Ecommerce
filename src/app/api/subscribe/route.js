import { SubscribeItem } from "@/models/Suscribe";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectMongoDB } from "@/util/connectMongoDB";

export async function PUT(req) {
    await connectMongoDB()
    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const doc = await SubscribeItem.updateOne({ email }, data)
    return Response.json(doc);
}

export async function GET() {
    await connectMongoDB()
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const user = await SubscribeItem.findOne({ email })
    return Response.json(user);
}