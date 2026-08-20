import { NextResponse } from "next/server";
import { connectToDatabase } from "@/src/lib/db";
import { Details } from "@/src/model/model";

export async function POST(request) {
  try {
    const { firstName, email, number, message } = await request.json();

    if (!firstName || !email || !number || !message) {
      return NextResponse.json(
        { error: "firstName, email, number and message are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const client = new Details({ firstName, email, number, message });
    await client.save();
    const allClients = await Details.find();
    return NextResponse.json(allClients);
  } catch (error) {
    console.error("Error saving client details:", error);
    return NextResponse.json(
      { error: "Failed to save client details" },
      { status: 500 }
    );
  }
}