import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axiosInstance from "@/utils/axiosInstance";
import { Button } from "@/components/ui/button";

const LessonDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLesson = async () => {
    try {
      const res = await axiosInstance.get(`/api/lessons/${slug}`);
      setLesson(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLesson();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b0b0c] text-neutral-400">
        Loading lesson...
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-neutral-300 bg-[#0b0b0c]">
        Lesson not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#0b0b0c] text-white relative">

      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-14 space-y-10">

        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            {lesson.title}
          </h1>

          <Button
            onClick={() => navigate("/dashboard")}
            className="bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-white rounded-xl px-5"
          >
            Back to Dashboard
          </Button>
        </div>

        <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.45)] backdrop-blur-md">
          <div
            className="prose prose-invert max-w-none text-neutral-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: lesson.content }}
          />

          <div className="flex justify-end mt-10">
            <Link to={`/quiz/${lesson.slug}`}>
              <Button className="bg-white text-black rounded-xl px-6 py-2 hover:bg-neutral-200 transition">
                Start Quiz
              </Button>
            </Link>
          </div>
        </div>

        <Link to="/lessons">
          <Button
            variant="ghost"
            className="text-neutral-300 rounded-lg hover:bg-neutral-800 hover:text-white px-4"
          >
            ← Back to All Lessons
          </Button>
        </Link>

      </div>
    </div>
  );
};

export default LessonDetails;
