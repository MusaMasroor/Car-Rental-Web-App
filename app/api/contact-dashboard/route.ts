import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  try {
    // Fetch rent information from the database
    const contacts = await db.contact.findMany(); // Assuming you want to fetch all users

    // Extract relevant fields from each user object
    const contactInfo = contacts.map((data) => ({
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      message: data.message,
    }));

    return NextResponse.json(contactInfo, { status: 200 });
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
