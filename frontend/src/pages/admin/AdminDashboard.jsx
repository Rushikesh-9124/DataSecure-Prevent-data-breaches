import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import adminAxiosInstance from "@/utils/adminAxiosInstance";

const AdminDashboard = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const lessonsRes = await adminAxiosInstance.get("/api/lessons");
      setLessons(lessonsRes.data);
      setLoading(false);
    } catch (err) {
      console.log(err.response);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-10 bg-linear-to-b from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
        Dashboard Overview
      </h1>

      {loading ? (
        <div className="text-neutral-400 text-lg">Loading dashboard...</div>
      ) : (
        <>
          {/* ONLY SHOW TOTAL LESSONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 shadow-lg">
              <p className="text-neutral-400">Total Lessons</p>
              <p className="text-4xl font-bold mt-2 text-neutral-100">
                {lessons.length}
              </p>
            </div>
          </div>

          {/* RECENT LESSONS SECTION */}
          <div className="p-10 bg-neutral-900/40 border border-white/10 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
              Recent Lessons
            </h2>

            {lessons.length === 0 ? (
              <p className="text-neutral-500">No lessons created yet.</p>
            ) : (
              <div className="space-y-6">
                {lessons
                  .slice(-5) // show last 5 lessons
                  .reverse()
                  .map((lesson) => (
                    <div
                      key={lesson._id}
                      className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 shadow-md hover:bg-neutral-900/70 transition"
                    >
                      <h3 className="text-xl font-bold text-neutral-100">
                        {lesson.title}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-2">
                        Slug: {lesson.slug}
                      </p>

                      {/* Show excerpt from lesson content */}
                      <div className="mt-4 text-neutral-400 text-sm line-clamp-3">
                        {lesson?.content
                          ?.replace(/<[^>]*>?/gm, "") // remove HTML tags
                          .slice(0, 180)}...
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;
