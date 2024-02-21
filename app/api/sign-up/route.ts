import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import * as z from "zod";
import { Role } from "@prisma/client";
// define a schema for input validation
// const userSchema = z.object({
//   username: z.string().min(1, "Username is required").max(100),
//   email: z.string().min(1, "Email is required").email("Invalid email"),
//   password: z
//     .string()
//     .min(1, "Password is required")
//     .min(8, "Password must have 8 characters"),
// });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, password } = body;

    if (!firstName || !lastName || !email || !password) {
      return new NextResponse("Kindly, fill out all the input fields.", {
        status: 400,
      });
    }

    // check if the email already exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          success: "User with this email already exists",
        },
        { status: 409 }
      );
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashPassword,
        roles: Role.USER,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error", error);
    return NextResponse.json(
      {
        message: "Something went wrong !",
      },
      { status: 500 }
    );
  }
}
