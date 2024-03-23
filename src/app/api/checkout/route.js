import { Order } from "../../../models/Order";
import { connectMongoDB } from "../../../util/connectMongoDB";

export async function POST(req) {
    await connectMongoDB()
    const data = await req.json();
    const orderDoc = await Order.create(data);
    return Response.json(orderDoc)
}

export async function GET(req) {
    await connectMongoDB()
    const data = await req.json();
    const user = await Order.find(data)
    return Response.json(user);
}