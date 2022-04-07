const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
  },
  { timestamps: true }
);
const Notes = mongoose.model("Notes", notesSchema);
module.exports = Notes;
