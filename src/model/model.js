import 'server-only';
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// const Details = mongoose.model("Details", clientSchema);

// module.exports = Details;
// export default Details;

export const Details =
  mongoose.models.Details || mongoose.model("Details", clientSchema);
