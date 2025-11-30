import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema(
  {
    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
      required: true
    },
    text: {
      type: String,
      required: true
    },
    choices: [
      {
        type: String,
        required: true
      }
    ],
    answerIndex: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      enum: ["mcq", "tf", "scenario"],
      default: "mcq"
    }
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);
export default Question;
