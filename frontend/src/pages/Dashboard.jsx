import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "@/utils/axiosInstance";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const lessonsRes = await axiosInstance.get("/api/lessons");
      setLessons(lessonsRes.data);
      
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goToAdminPanel = () => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) navigate("/admin");
    else navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0b0c] flex items-center justify-center text-neutral-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#0b0b0c] text-white relative">

      {/* background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 space-y-14">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="
                text-5xl font-bold 
                bg-linear-to-b from-neutral-200 to-neutral-500 
                bg-clip-text text-transparent tracking-tight
              "
            >
              Dashboard Overview
            </h1>

            <p className="text-neutral-400 mt-3 text-lg">
              Your learning progress summary
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={goToAdminPanel}
              className="bg-white text-black hover:bg-neutral-200 px-6 py-2 rounded-xl"
            >
              Admin Panel
            </Button>

            <Button
              onClick={handleLogout}
              className="bg-neutral-900 border border-white/10 hover:bg-neutral-800 text-white px-6 py-2 rounded-xl"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 shadow-lg">
            <p className="text-neutral-400">Total Lessons</p>
            <h2 className="text-4xl font-semibold mt-3 text-neutral-200">
              {lessons.length}
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 shadow-lg flex items-center justify-center text-neutral-500">
            No Score Tracking Yet
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 shadow-lg flex items-center justify-center text-neutral-500">
            No Attempts Tracking Yet
          </div>
        </div>

        {/* CONTINUE LEARNING */}
        <div>
          <h2
            className="
              text-3xl font-semibold mb-6
              bg-linear-to-b from-neutral-200 to-neutral-500 
              bg-clip-text text-transparent
            "
          >
            Continue Learning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {lessons.map((lesson) => (
              <div
                key={lesson._id}
                className="
                  p-6 rounded-2xl 
                  bg-neutral-900/40 
                  border border-white/10 
                  shadow-[0_0_25px_rgba(0,0,0,0.45)]
                  hover:border-white/20 hover:bg-neutral-900/60 
                  transition
                "
              >
                <h3 className="text-xl font-semibold text-neutral-100">
                  {lesson.title}
                </h3>

                <div className="flex items-center justify-between mt-6">

                  <Link to={`/lessons/${lesson.slug}`}>
                    <Button className="bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-xl">
                      Open
                    </Button>
                  </Link>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
