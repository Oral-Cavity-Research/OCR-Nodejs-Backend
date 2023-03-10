// this will act as a log for all the reviews made by reviewers on respective patients
const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    teleConEntry_Id: {
      type: mongoose.Types.ObjectId,
      ref: "TeleConEntry",
      required: true,
    },
    provisional_diagnosis: {
      type: String,
      default: "",
    },
    management_suggestions: {
      type: String,
      default: "",
    },
    review_suggestions: {
      type: String,
      default: "",
    },
    review_comment: {
      type: String,
      default: "",
    },
    other_comments: {
      type: String,
      default: "",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
