import Question from "../models/Question.js";
import Lesson from "../models/Lesson.js";

export const createQuestion = async (req, res) => {
  try {
    const { lessonId, text, choices, answerIndex, type } = req.body;

    const question = await Question.create({
      lesson: lessonId,
      text,
      choices,
      answerIndex,
      type,
    });

    // push question into lesson
    await Lesson.findByIdAndUpdate(lessonId, {
      $push: { questions: question._id },
    });

    return res.status(201).json(question);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const q = await Question.findById(id);
    if (!q) return res.status(404).json({ message: "Not found" });

    await Lesson.findByIdAndUpdate(q.lesson, {
      $pull: { questions: q._id },
    });

    await q.deleteOne();

    return res.json({ message: "Question deleted" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};




