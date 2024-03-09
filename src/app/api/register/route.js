import { connectMongoDB } from "@/util/connectMongoDB"
import { User } from "../../../models/User"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { name, email } = await req.json()
    await connectMongoDB()
    await User.create({ name, email })
    return NextResponse.json({ message: "Felicidades, has iniciado sesion" }, { status: 201 })
}