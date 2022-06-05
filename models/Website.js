const mongoose = require("mongoose");

const websiteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
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

const Website = mongoose.model("Website", websiteSchema);
