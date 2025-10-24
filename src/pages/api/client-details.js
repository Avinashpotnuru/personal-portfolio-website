import { Details } from "@/src/model/model";

import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://avinash:LE9e9K7eKwrmFGyA@cluster0.istpydn.mongodb.net/clientdetails",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.warn("connect"))
  .catch((err) => console.warn(err));

export default function handler(req, res) {
  Details.find({})
    .then((result) => res.send(result))
    .catch((err) => console.warn(err));
}
