import mongoose from "mongoose"

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL)
    } catch (error) {
        console.log("Error connecting", error)
    }
}