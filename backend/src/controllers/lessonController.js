import Lesson from "../models/Lesson.js";

export const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find()
      .sort({ order: 1 })
      .select("title slug order");

    return res.json(lessons);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getLesson = async (req, res) => {
  try {
    const { slug } = req.params;

    const lesson = await Lesson.findOne({ slug }).populate("questions");

    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    return res.json(lesson);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
