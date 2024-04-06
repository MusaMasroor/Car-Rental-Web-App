import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  try {
    // Fetch rent information from the database
    const users = await db.user.findMany(); // Assuming you want to fetch all users

    // Extract relevant fields from each user object
    const userInfo = users.map((user) => ({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    }));

    return NextResponse.json(userInfo, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Something went wrong!",
      },
      { status: 500 }
    );
  }
}
