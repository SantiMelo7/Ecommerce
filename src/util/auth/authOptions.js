import GoogleProvider from "next-auth/providers/google";
//import {} from "next-auth";
//import { db } from "../auth/firebase.config"
//import * as firestoreFunctions from "firebase/firestore"

export const authOptions = {

  secret: process.env.SECRET,
  // los provedores que utilizamos son, el de google
  providers: [
    // provedor de google
    GoogleProvider({
      // damos el id del cliente del cloud
      clientId: process.env.GOOGLE_CLIENT_ID,
      // y la api secreta
      clientSecret: process.env.GOOGLE_CLIENT_SECRET

    }),
  ],

  /*adapter: ({
    db: db,
    ...firestoreFunctions

  }),*/
}