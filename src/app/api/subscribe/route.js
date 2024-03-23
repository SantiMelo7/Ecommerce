import { SubscribeItem } from "@/models/Suscribe";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { connectMongoDB } from "@/util/connectMongoDB";

export async function PUT(req) {
    await connectMongoDB()
    const data = await req.json();
    const doc = await SubscribeItem.updateOne(data)
    return Response.json(doc);
}

export async function GET() {
    await connectMongoDB()
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const user = await SubscribeItem.find(email)
    return Response.json(user);
}