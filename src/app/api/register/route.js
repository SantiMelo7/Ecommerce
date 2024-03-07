import { connectMongoDB } from "@/util/connectMongoDB"
import { UserItem } from "../../../models/UserItem"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { name, email } = await req.json()
    await connectMongoDB()
    await UserItem.create({ name, email })
    return NextResponse.json({ message: "Felicidades, has iniciado sesion" }, { status: 201 })
}