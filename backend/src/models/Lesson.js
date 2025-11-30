import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    content: {
      type: String,
      required: true
    },
    order: {
      type: Number,
      default: 1
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
      }
    ]
  },
  { timestamps: true }
);

const Lesson = mongoose.model("Lesson", LessonSchema);
export default Lesson;
