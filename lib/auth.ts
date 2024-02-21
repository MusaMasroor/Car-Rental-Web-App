// import NextAuth from "next-auth/next";
// import { CredentialsProvider } from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
// export const authOptions = {
//   adapters: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "email", type: "string", placeholder: "@email.com" },
//         password: { label: "password", type: "password" },
//       },
//       async authorize(credentials) {},
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXT_AUTH_SECRET_KEY,
//   debug: process.env.NODE_ENV === "development",
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
