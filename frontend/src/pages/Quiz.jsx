import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axiosInstance from "@/utils/axiosInstance";
import { Button } from "@/components/ui/button";

const Quiz = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Fetch lesson + questions
  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const res = await axiosInstance.get(`/api/lessons/${slug}`);
        setLesson(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    fetchLesson();
  }, [slug]);

  // Save score to DB
  const saveScoreToDB = async () => {
    try {
      await axiosInstance.post("/api/score/save", {
        lessonId: lesson._id,
        score,
        totalQuestions: lesson.questions.length,
      });
    } catch (err) {
      console.log("Score save error:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-neutral-400 bg-[#0b0b0c]">
        Loading quiz...
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0b0c] text-neutral-300">
        Lesson not found.
      </div>
    );
  }

  if (!lesson.questions || lesson.questions.length === 0) {
    return (
      <div className="min-h-screen w-full bg-[#0b0b0c] text-white relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 py-20 text-center space-y-8">

          <h1 className="text-5xl font-bold bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            No Questions Available
          </h1>

          <p className="text-neutral-400 text-lg">
            This lesson currently has no quiz questions.
          </p>

          <Link to={`/lessons/${slug}`}>
            <Button className="bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white px-6 py-2 rounded-xl">
              ← Back To Lesson
            </Button>
          </Link>

        </div>
      </div>
    );
  }

  const question = lesson.questions[currentIndex];

  const submitAnswer = () => {
    if (submitted) return;

    setSubmitted(true);

    if (selected === question.answerIndex) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex === lesson.questions.length - 1) {
        setIsFinished(true);
        saveScoreToDB();
        return;
      }

      setSelected(null);
      setSubmitted(false);
      setCurrentIndex((prev) => prev + 1);
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="min-h-screen w-full bg-[#0b0b0c] text-white relative">

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 py-20 space-y-16">

          <div className="text-center space-y-4">
            <h1 className="text-6xl font-extrabold bg-linear-to-b from-neutral-100 to-neutral-500 bg-clip-text text-transparent">
              Quiz Completed 🎉
            </h1>

            <p className="text-neutral-400 text-lg">
              Great work! Here’s your result.
            </p>
          </div>

          <div className="p-12 rounded-3xl bg-neutral-900/40 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.55)] space-y-10">
            <div className="text-center space-y-4">
              <p className="text-neutral-300 text-xl">Your Score</p>

              <p className="text-8xl font-extrabold bg-linear-to-b from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                {score}/{lesson.questions.length}
              </p>

              <p className="text-neutral-500 text-sm">
                {score === lesson.questions.length
                  ? "Perfect score! Amazing!"
                  : score >= lesson.questions.length / 2
                  ? "Good job! Keep going!"
                  : "Don't worry — try again and improve!"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

              <div className="p-6 rounded-2xl bg-neutral-800/40 border border-white/5 text-center">
                <p className="text-3xl font-bold text-neutral-200">{lesson.questions.length}</p>
                <p className="text-neutral-400 text-sm mt-1">Total Questions</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-800/40 border border-white/5 text-center">
                <p className="text-3xl font-bold text-neutral-200">{score}</p>
                <p className="text-neutral-400 text-sm mt-1">Correct Answers</p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-800/40 border border-white/5 text-center">
                <p className="text-3xl font-bold text-neutral-200">
                  {Math.round((score / lesson.questions.length) * 100)}%
                </p>
                <p className="text-neutral-400 text-sm mt-1">Accuracy</p>
              </div>

            </div>

            <div className="flex justify-center mt-12">
              <Link to="/dashboard">
                <Button className="px-7 py-3 text-lg rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white">
                  Back to Dashboard
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#0b0b0c] text-white relative">

      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-14 space-y-10">

        <Link
          to={`/lessons/${slug}`}
          className="text-neutral-400 hover:text-neutral-200 transition flex items-center gap-2"
        >
          ← Back To Lesson
        </Link>

        <h1 className="text-4xl font-bold tracking-tight bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Quiz — {lesson.title}
        </h1>

        <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.45)] backdrop-blur-md">

          <p className="text-neutral-400 mb-6">
            Question {currentIndex + 1} of {lesson.questions.length}
          </p>

          <h2 className="text-xl font-semibold mb-6 text-neutral-100 leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-4">
            {question.choices.map((choice, idx) => {
              let style = "border-white/10 hover:bg-neutral-800/40";

              if (submitted) {
                if (idx === question.answerIndex) {
                  style = "border-green-500/40 bg-green-900/30";
                } else if (idx === selected) {
                  style = "border-red-500/40 bg-red-900/30";
                } else {
                  style = "border-white/10 opacity-40";
                }
              } else if (selected === idx) {
                style = "border-white/40 bg-neutral-800/70";
              }

              return (
                <label
                  key={idx}
                  className={`flex items-center gap-3 cursor-pointer px-4 py-3 rounded-xl border transition ${style}`}
                >
                  <input
                    type="radio"
                    disabled={submitted}
                    checked={selected === idx}
                    onChange={() => setSelected(idx)}
                    className="accent-neutral-200"
                  />
                  <span className="text-neutral-200">{choice}</span>
                </label>
              );
            })}
          </div>

          <div className="flex items-center justify-end mt-10">
            <Button
              onClick={submitAnswer}
              disabled={selected === null || submitted}
              className="bg-white text-black rounded-xl px-6 py-2 hover:bg-neutral-200 transition disabled:opacity-30"
            >
              {currentIndex === lesson.questions.length - 1
                ? "Finish"
                : submitted
                ? "..."
                : "Submit"}
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Quiz;
