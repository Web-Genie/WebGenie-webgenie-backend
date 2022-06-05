const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    userSavedCode: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Website", websiteSchema);
