import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  try {
    const { name, email, phone, address, message } = await req.json();

    if (!name || !email || !phone || !address || !message) {
      return new NextResponse("Please fill out all the required fields.", {
        status: 400,
      });
    }

    // Your database logic to save the rent information
    const contactInfo = await db.contact.create({
      data: {
        name,
        email,
        phone,
        address,
        message,
      },
    });

    return NextResponse.json(
      {
        message: "Rent submitted successfully",
        contactInfo,
      },
      { status: 201 }
    );
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
