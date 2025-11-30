import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Lessons from "./pages/Lessons";
import LessonDetails from "./pages/LessonDetails";
import Quiz from "./pages/Quiz";
import Scoreboard from "./pages/Scoreboard";
// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageLessons from "./pages/admin/ManageLessons";
import CreateLesson from "./pages/admin/CreateLesson";
import EditLesson from "./pages/admin/EditLesson";
import ManageQuestions from "./pages/admin/ManageQuestions";
import CreateQuestion from "./pages/admin/CreateQuestion";
import EditQuestion from "./pages/admin/EditQuestion";
import ViewScores from "./pages/admin/ViewScores";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

const AdminProtected = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");

  if (!adminToken) return <Navigate to="/admin/login" replace />;

  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lessons"
          element={
            <ProtectedRoute>
              <Lessons />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lessons/:slug"
          element={
            <ProtectedRoute>
              <LessonDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz/:slug"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/scoreboard"
          element={
            <ProtectedRoute>
              <Scoreboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
        {/* ---------------- ADMIN AUTH ---------------- */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ---------------- ADMIN PANEL ---------------- */}
        <Route
          path="/admin"
          element={
            <AdminProtected>
              <AdminDashboard />
            </AdminProtected>
          }
        />

        <Route
          path="/admin/lessons"
          element={
            <AdminProtected>
              <ManageLessons />
            </AdminProtected>
          }
        />

        <Route
          path="/admin/create-lesson"
          element={
            <AdminProtected>
              <CreateLesson />
            </AdminProtected>
          }
        />

        {/* <Route
          path="/admin/edit-lesson/:id"
          element={
            <AdminProtected>
              <EditLesson />
            </AdminProtected>
          }
        /> */}

        <Route
          path="/admin/questions"
          element={
            <AdminProtected>
              <ManageQuestions />
            </AdminProtected>
          }
        />

        <Route
          path="/admin/create-question"
          element={
            <AdminProtected>
              <CreateQuestion />
            </AdminProtected>
          }
        />

        <Route
          path="/admin/edit-question/:id"
          element={
            <AdminProtected>
              <EditQuestion />
            </AdminProtected>
          }
        />

        <Route
          path="/admin/scores"
          element={
            <AdminProtected>
              <ViewScores />
            </AdminProtected>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
