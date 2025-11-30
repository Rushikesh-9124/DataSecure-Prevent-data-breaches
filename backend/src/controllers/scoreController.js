import Score from "../models/Score.js";

export const saveScore = async (req, res) => {
  try {
    const { lessonId, score, totalQuestions } = req.body;

    let existing = await Score.findOne({
      user: req.user._id,
      lesson: lessonId,
    });

    if (existing) {
      existing.score = score;
      existing.totalQuestions = totalQuestions;
      existing.completed = true;
      await existing.save();
      return res.json(existing);
    }

    const newScore = await Score.create({
      user: req.user._id,
      lesson: lessonId,
      score,
      totalQuestions,
      completed: true,
    });

    return res.status(201).json(newScore);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getUserScores = async (req, res) => {
  try {
    const scores = await Score.find({ user: req.user._id }).populate(
      "lesson",
      "title slug order"
    );

    return res.json(scores);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
