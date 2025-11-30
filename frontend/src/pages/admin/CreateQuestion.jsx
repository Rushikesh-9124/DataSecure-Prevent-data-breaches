import React, { useState, useEffect } from "react";
import adminAxiosInstance from "@/utils/adminAxiosInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

const CreateQuestion = () => {
  const [lessons, setLessons] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const [qText, setQText] = useState("");
  const [type, setType] = useState("mcq");
  const [choices, setChoices] = useState(["", ""]);
  const [answerIndex, setAnswerIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await adminAxiosInstance.get("/api/lessons");
        setLessons(res.data || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const resetForm = () => {
    setQText("");
    setType("mcq");
    setChoices(["", ""]);
    setAnswerIndex(0);
  };

  const addChoice = () => setChoices((s) => [...s, ""]);

  const updateChoice = (val, idx) =>
    setChoices((s) => s.map((c, i) => (i === idx ? val : c)));

  const removeChoice = (idx) => {
    setChoices((s) => {
      const next = s.filter((_, i) => i !== idx);
      // adjust answerIndex
      setAnswerIndex((prev) => {
        if (next.length === 0) return 0;
        if (idx === prev) return 0;
        if (idx < prev) return prev - 1;
        return prev;
      });
      return next.length ? next : [""];
    });
  };

  const validatePayload = () => {
    if (!selectedLesson) {
      alert("Select a lesson first.");
      return false;
    }
    if (!qText.trim()) {
      alert("Enter question text.");
      return false;
    }
    if (type === "mcq") {
      if (choices.length < 2) {
        alert("MCQ requires at least 2 choices.");
        return false;
      }
      if (choices.some((c) => !c.trim())) {
        alert("All choices must be filled.");
        return false;
      }
      if (answerIndex === null || answerIndex < 0 || answerIndex >= choices.length) {
        alert("Select the correct answer.");
        return false;
      }
    } else if (type === "tf") {
      if (answerIndex !== 0 && answerIndex !== 1) {
        alert("Select True or False as the correct answer.");
        return false;
      }
      // ensure choices reflect TF semantics for preview (optional)
    } else if (type === "scenario") {
      if (!choices[0] || !choices[0].trim()) {
        alert("Provide the scenario text.");
        return false;
      }
      // we'll set answerIndex = 0 by convention
    }
    return true;
  };

  const addQuestion = async () => {
    if (!validatePayload()) return;

    const payload = {
      lessonId: selectedLesson._id,
      text: qText.trim(),
      choices: type === "scenario" ? [choices[0].trim()] : choices.map((c) => c.trim()),
      answerIndex: type === "scenario" ? 0 : answerIndex,
      type,
    };

    try {
      await adminAxiosInstance.post("/api/questions", payload);
      alert("Question added successfully.");
      resetForm();
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Failed to add question.");
    }
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-[#0b0b0c] text-white p-10 relative">
        <h1 className="text-4xl font-bold bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-6">
          Add Questions
        </h1>

        <p className="text-neutral-400 mb-6">Select a lesson to add questions:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <div
              key={lesson._id}
              className="bg-neutral-900/40 border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-neutral-900/60 transition"
            >
              <h2 className="text-xl font-semibold text-neutral-100">{lesson.title}</h2>
              <p className="text-neutral-500 text-sm mt-2">Slug: {lesson.slug}</p>

              <Button
                className="mt-6 w-full bg-white text-black rounded-xl hover:bg-neutral-200"
                onClick={() => {
                  setSelectedLesson(lesson);
                  setOpen(true);
                  resetForm();
                }}
              >
                Add Questions
              </Button>
            </div>
          ))}
        </div>

        {open && selectedLesson && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-neutral-900/60 border border-white/10 rounded-3xl w-full max-w-2xl p-6 shadow-2xl space-y-6 relative">
              <button
                className="absolute top-4 right-4 text-neutral-400 hover:text-white text-2xl"
                onClick={() => setOpen(false)}
              >
                ×
              </button>

              <h2 className="text-2xl font-semibold bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Add Question to — {selectedLesson.title}
              </h2>

              <div className="space-y-3">
                <label className="text-neutral-300 text-sm">Question Text</label>
                <Input
                  value={qText}
                  onChange={(e) => setQText(e.target.value)}
                  className="bg-neutral-800 border-white/10 text-white"
                  placeholder="Enter question..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-neutral-300 text-sm">Question Type</label>
                <select
                  value={type}
                  onChange={(e) => {
                    const next = e.target.value;
                    setType(next);
                    // adjust defaults based on type
                    if (next === "mcq") {
                      setChoices((c) => (c.length >= 2 ? c : ["", ""]));
                      setAnswerIndex(0);
                    } else if (next === "tf") {
                      setChoices(["True", "False"]);
                      setAnswerIndex(0);
                    } else if (next === "scenario") {
                      setChoices([""]);
                      setAnswerIndex(0);
                    }
                  }}
                  className="bg-neutral-800 border-white/10 text-white px-3 py-2 rounded-lg w-full outline-none"
                >
                  <option value="mcq">Multiple Choice</option>
                  <option value="tf">True / False</option>
                  <option value="scenario">Scenario</option>
                </select>
              </div>

              {type === "mcq" && (
                <div className="space-y-4 pt-2">
                  <label className="text-neutral-300 text-sm">Choices</label>

                  <div className="space-y-3">
                    {choices.map((c, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-neutral-800/50 border border-white/10 p-3 rounded-xl"
                      >
                        <input
                          aria-label={`Select correct answer option ${idx + 1}`}
                          type="checkbox"
                          checked={answerIndex === idx}
                          onChange={() => setAnswerIndex(idx)}
                          className="accent-green-500"
                        />

                        <Input
                          value={c}
                          onChange={(e) => updateChoice(e.target.value, idx)}
                          className="bg-neutral-800 border-white/10 text-white"
                          placeholder={`Choice ${idx + 1}`}
                        />

                        {choices.length > 2 && (
                          <Trash2
                            size={18}
                            className="text-red-400 cursor-pointer"
                            onClick={() => removeChoice(idx)}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="border-white/10 text-neutral-300 hover:bg-neutral-800"
                    onClick={addChoice}
                  >
                    Add Choice
                  </Button>
                </div>
              )}

              {type === "tf" && (
                <div className="flex gap-4 pt-2">
                  <Button
                    onClick={() => setAnswerIndex(0)}
                    className={`px-6 py-2 rounded-xl transition ${
                      answerIndex === 0
                        ? "bg-white text-black"
                        : "bg-neutral-800 border border-white/20 text-neutral-300 hover:bg-neutral-700"
                    }`}
                  >
                    True
                  </Button>

                  <Button
                    onClick={() => setAnswerIndex(1)}
                    className={`px-6 py-2 rounded-xl transition ${
                      answerIndex === 1
                        ? "bg-white text-black"
                        : "bg-neutral-800 border border-white/20 text-neutral-300 hover:bg-neutral-700"
                    }`}
                  >
                    False
                  </Button>
                </div>
              )}

              {type === "scenario" && (
                <div className="space-y-2 pt-2">
                  <label className="text-neutral-300 text-sm">Scenario Text</label>
                  <textarea
                    className="w-full min-h-[140px] p-3 bg-neutral-800 border border-white/10 text-white rounded-xl"
                    placeholder="Describe the scenario..."
                    value={choices[0]}
                    onChange={(e) => setChoices([e.target.value])}
                  />
                </div>
              )}

              <div>
                <Button
                  className="w-full bg-white text-black hover:bg-neutral-200 rounded-xl py-3 text-lg"
                  onClick={addQuestion}
                >
                  Add Question
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default CreateQuestion;
