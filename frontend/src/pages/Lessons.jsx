import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "@/utils/axiosInstance";
import { Button } from "@/components/ui/button";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLessons = async () => {
    try {
      const res = await axiosInstance.get("/api/lessons");
      setLessons(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0b0c] flex items-center justify-center text-neutral-400">
        Loading lessons...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#0b0b0c] text-white relative">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-14 space-y-12">

        {/* Heading */}
        <h1
          className="
            text-5xl font-bold tracking-tight
            bg-linear-to-b from-neutral-200 to-neutral-500 
            bg-clip-text text-transparent
          "
        >
          All Lessons
        </h1>

        <p className="text-neutral-400 text-lg">
          Explore all available lessons and continue your learning journey.
        </p>

        {/* Empty */}
        {lessons.length === 0 && (
          <p className="text-neutral-500 text-center text-lg mt-20">
            No lessons available yet.
          </p>
        )}

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {lessons.map((lesson) => (
            <div
              key={lesson._id}
              className="
                p-7 rounded-3xl 
                bg-neutral-900/40 
                border border-white/10 
                shadow-[0_0_25px_rgba(0,0,0,0.45)]
                backdrop-blur-md
                hover:border-white/20 
                hover:bg-neutral-900/60
                transition duration-300
                flex flex-col justify-between
              "
            >
              <h3 className="text-xl font-semibold text-neutral-100">
                {lesson.title}
              </h3>

              <p className="text-neutral-400 text-sm mt-4 leading-relaxed flex-1">
                {(lesson.content || "")
                  .replace(/<[^>]*>/g, "")
                  .substring(0, 140)}...
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-neutral-500 text-sm">
                  {lesson.questions?.length || 0} questions
                </span>

                <Link to={`/lessons/${lesson.slug}`}>
                  <Button
                    size="sm"
                    className="
                      bg-white text-black px-4 py-2 rounded-xl
                      hover:bg-neutral-200 transition
                    "
                  >
                    Open
                  </Button>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Lessons;
