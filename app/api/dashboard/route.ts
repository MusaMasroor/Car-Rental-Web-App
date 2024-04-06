import { db } from "@/lib/db";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(req: Request) {
  try {
    // Fetch rent information from the database
    const rentInfo = await db.rent.findMany({
      include: {
        car: true, // Include car details
      },
    });

    return NextResponse.json(rentInfo, { status: 200 });
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
