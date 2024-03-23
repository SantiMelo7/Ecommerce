import { Order } from "../../../models/Order";
import { connectMongoDB } from "../../../util/connectMongoDB";

export async function POST(req) {
    await connectMongoDB()
    const data = await req.json();
    const orderDoc = await Order.create(data);
    return Response.json({ orderDoc })
}

export async function GET() {
    await connectMongoDB()
    return Response.json(await Order.find())
}