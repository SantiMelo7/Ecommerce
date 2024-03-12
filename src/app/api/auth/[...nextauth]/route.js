import clientPromise from "@/libs/mongoConnect";
import { UserItem } from "../../../../models/User";
import { connectMongoDB } from "@/util/connectMongoDB";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        // provedor de google
        GoogleProvider({
            // damos el id del cliente del cloud
            clientId: process.env.GOOGLE_CLIENT_ID,
            // y la api secreta
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === "google") {
                const { email, name } = user
                try {
                    await connectMongoDB()
                    const exist = await UserItem.findOne({ email })
                    if (!exist) {
                        const res = await fetch("http://localhost:3000/api/register", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                name, email
                            })
                        })
                        if (res.ok) {
                            return user
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            return user
        }
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }