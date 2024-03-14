const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    // push here sendid and reciver id
    participents: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    // push here  the message id
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },

  { timestamps: true } // Automatically add createdAt and updatedAt to
);

const Conversation = mongoose.model("Conversation", dataSchema);

module.exports = Conversation;
