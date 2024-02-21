import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, car } = await req.json();

    if (!name || !email || !phone || !address || !car) {
      return new NextResponse("Please fill out all the required fields.", {
        status: 400,
      });
    }

    // Your database logic to save the rent information
    const rentInfo = await db.rent.create({
      data: {
        name,
        email,
        phone,
        address,
        car: {
          create: car,
        },
      },
      include: {
        car: true, // Include the car data in the response
      },
    });

    return NextResponse.json(
      {
        message: "Rent submitted successfully",
        rentInfo,
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
