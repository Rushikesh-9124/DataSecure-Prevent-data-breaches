import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import adminAxiosInstance from "@/utils/adminAxiosInstance";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManageLessons = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getLessons = async () => {
    try {
      const res = await adminAxiosInstance.get("/api/lessons");
      setLessons(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteLesson = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lesson?"))
      return;

    try {
      await adminAxiosInstance.delete(`/api/admin/lesson/${id}`);
      setLessons((prev) => prev.filter((l) => l._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLessons();
  }, []);

  return (
    <AdminLayout>
      <div className="min-h-screen bg-[#0b0b0c] text-white p-10 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]" />

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl font-bold bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Manage Lessons
            </h1>

            
          </div>

          {loading ? (
            <div className="text-neutral-400 text-lg">Loading lessons...</div>
          ) : lessons.length === 0 ? (
            <div className="text-neutral-500 text-lg">
              No lessons found. Create one.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {lessons.map((lesson) => (
                <div
                  key={lesson._id}
                  className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-neutral-900/60 transition"
                >
                  <h2 className="text-xl font-semibold text-neutral-100">
                    {lesson.title}
                  </h2>

                  <p className="text-neutral-500 text-sm mt-1">
                    Slug: {lesson.slug}
                  </p>

                  <p className="text-neutral-500 text-sm mt-1">
                    Order: {lesson.order}
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <Button
                      onClick={() =>
                        navigate(`/lessons/${lesson.slug}`)
                      }
                      className="bg-white text-black hover:bg-neutral-200 rounded-xl py-2 flex items-center justify-center gap-2"
                    >
                      <BookOpen size={18} /> View Lesson
                    </Button>

                    <Button
                      onClick={() =>
                        navigate("/admin/create-question", {
                          state: { lesson }
                        })
                      }
                      className="bg-neutral-800 text-white border border-white/20 hover:bg-neutral-700 rounded-xl py-2"
                    >
                      Add Questions
                    </Button>

                    <Button
                      onClick={() => deleteLesson(lesson._id)}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-xl py-2 flex items-center justify-center gap-2"
                    >
                      <Trash2 size={18} /> Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageLessons;
