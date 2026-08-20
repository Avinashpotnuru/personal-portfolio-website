import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected && mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not set.");
  }

  const connection = await mongoose.connect(MONGODB_URI);

  isConnected = true;

  return connection;
}