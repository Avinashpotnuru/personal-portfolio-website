import { Details } from "@/src/model/model";
import mongoose from "mongoose";

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://avinash:LE9e9K7eKwrmFGyA@cluster0.istpydn.mongodb.net/clientdetails",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.warn("MongoDB connected"))
  .catch((err) => console.warn("MongoDB connection error:", err));

// Named export function to resolve ESLint warning
export default async function addClientDetailsHandler(req, res) {
  if (req.method === "POST") {
    const { firstName, email, number, message } = req.body;
    try {
      const client = new Details({ firstName, email, number, message });
      await client.save();
      const allClients = await Details.find();
      return res.status(200).json(allClients);
    } catch (err) {
      console.error("Error saving client details:", err);
      return res.status(500).json({ error: "Failed to save client details" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
