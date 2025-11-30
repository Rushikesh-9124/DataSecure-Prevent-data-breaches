import Lesson from "../models/Lesson.js";
import Question from "../models/Question.js";

export const createLesson = async (req, res) => {
  try {
    const { title, slug, content, order } = req.body;

    const exists = await Lesson.findOne({ slug });
    if (exists) return res.status(400).json({ message: "Slug already exists" });

    const lesson = await Lesson.create({
      title,
      slug,
      content,
      order,
    });

    return res.status(201).json(lesson);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteLesson = async (req, res) => {
  try {
    const { id } = req.params;

    const lesson = await Lesson.findById(id);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    // Remove associated questions
    await Question.deleteMany({ lesson: id });

    await lesson.deleteOne();

    return res.json({ message: "Lesson deleted" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
