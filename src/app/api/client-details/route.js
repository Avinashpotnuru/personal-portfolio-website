import { NextResponse } from "next/server";
import { connectToDatabase } from "@/src/lib/db";
import { Details } from "@/src/model/model";

export async function GET() {
  try {
    await connectToDatabase();
    const result = await Details.find({});
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching client details:", error);
    return NextResponse.json(
      { error: "Failed to fetch client details" },
      { status: 500 }
    );
  }
}