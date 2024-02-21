import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";
import { compare } from "bcrypt";
import { Role } from "@prisma/client";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXT_AUTH_SECRET_KEY,

  debug: process.env.NODE_ENV === "development",

  pages: {
    signIn: "/sign-in",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email },
        });
        if (!existingUser) {
          return null;
        }

        const matchPassword = await compare(
          credentials.password,
          existingUser.password
        );
        if (!matchPassword) {
          return null;
        }

        // Check if the user has admin role
        const isAdmin = existingUser.roles.includes(Role.ADMIN);

        console.log("User ID:", existingUser.id);
        console.log("User Email:", existingUser.email);
        console.log("User Roles:", Role);
        console.log("Is Admin:", isAdmin);

        return {
          id: `${existingUser.id}`,
          email: `${existingUser.email}`,
          roles: `${existingUser.roles}`,
          isAdmin,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("jwt callback ->", "token :", token, "user :", user);
      if (user) {
        const modifiedToken = {
          ...token,
          roles: user.roles,
        };
        console.log("modified token :", modifiedToken);
        return modifiedToken;
      }

      return token;
    },
    async session({ session, token }) {
      console.log("session callback", session, token);

      return {
        ...session,
        user: {
          ...session.user,
          roles: token.roles,
        },
      };
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
