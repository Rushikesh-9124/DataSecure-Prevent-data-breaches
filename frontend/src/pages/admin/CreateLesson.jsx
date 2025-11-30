import React, { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import adminAxiosInstance from "@/utils/adminAxiosInstance";

const CreateLesson = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [order, setOrder] = useState(1);
  const [content, setContent] = useState("");

  const generateSlug = (t) =>
    t
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleTitleChange = (e) => {
    const t = e.target.value;
    setTitle(t);
    setSlug(generateSlug(t));
  };

  const insertBlock = (html) => {
    setContent((prev) => prev + "\n" + html + "\n");
  };

  const saveLesson = async () => {
    try {
      await adminAxiosInstance.post("/api/admin/lesson", {
        title,
        slug,
        content,
        order,
      });
      navigate("/admin");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <AdminLayout>
      <div className="min-h-screen w-full bg-[#0b0b0c] text-white px-8 py-10 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06]"></div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Create Lesson
          </h1>

          <div className="bg-neutral-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl space-y-8">
            <div className="space-y-2">
              <label className="text-neutral-300 text-sm">Lesson Title</label>
              <Input
                value={title}
                onChange={handleTitleChange}
                className="bg-neutral-800 border-white/10 text-white"
                placeholder="Mobile Security Basics"
              />
            </div>

            <div className="space-y-2">
              <label className="text-neutral-300 text-sm">Slug</label>
              <Input
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="bg-neutral-800 border-white/10 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-neutral-300 text-sm">Order</label>
              <Input
                type="number"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                className="bg-neutral-800 border-white/10 text-white"
              />
            </div>

            {/* CONTENT EDITOR */}
            <div className="space-y-3">
              <label className="text-neutral-300 text-sm">Lesson Content</label>

              {/* Toolbar */}
              <div className="flex flex-wrap gap-2 bg-neutral-900/60 p-4 rounded-xl border border-white/10">
                <Button
                  variant="outline"
                  className="border-white/10 text-neutral-300 hover:bg-neutral-800"
                  onClick={() =>
                    insertBlock(
                      `<h2 class="text-2xl font-semibold mb-4">Section Title</h2>`
                    )
                  }
                >
                  H2 Heading
                </Button>

                <Button
                  variant="outline"
                  className="border-white/10 text-neutral-300 hover:bg-neutral-800"
                  onClick={() =>
                    insertBlock(
                      `<p class="text-neutral-300 leading-relaxed mb-6">Write your paragraph here...</p>`
                    )
                  }
                >
                  Paragraph
                </Button>

                <Button
                  variant="outline"
                  className="border-white/10 text-neutral-300 hover:bg-neutral-800"
                  onClick={() =>
                    insertBlock(
                      `<ul class="list-disc ml-6 text-neutral-300 leading-relaxed space-y-3 mb-6">
  <li>List item one</li>
  <li>List item two</li>
  <li>List item three</li>
</ul>`
                    )
                  }
                >
                  Bullet List
                </Button>

                <Button
                  variant="outline"
                  className="border-white/10 text-neutral-300 hover:bg-neutral-800"
                  onClick={() =>
                    insertBlock(
                      `<div class="p-4 rounded-xl bg-neutral-900/50 border border-white/10 mb-6">
  <h3 class="text-xl font-semibold mb-3">Info Box Title</h3>
  <p class="text-neutral-300 leading-relaxed">Write something important here.</p>
</div>`
                    )
                  }
                >
                  Info Box
                </Button>

                <Button
                  variant="outline"
                  className="border-white/10 text-neutral-300 hover:bg-neutral-800"
                  onClick={() =>
                    insertBlock(
                      `<strong class="text-neutral-200">Bold Text</strong>`
                    )
                  }
                >
                  Bold
                </Button>
              </div>

              {/* Textarea */}
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-neutral-800 border-white/10 text-white min-h-[250px] font-mono text-sm"
                placeholder="<h2>Write your lesson content in HTML blocks...</h2>"
              />
            </div>

            <div className="flex justify-end">
              <Button
                className="bg-white text-black rounded-xl px-6 py-2 hover:bg-neutral-200"
                onClick={saveLesson}
              >
                Create Lesson
              </Button>
            </div>
          </div>

          {/* LIVE PREVIEW */}
          <div className="bg-neutral-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-xl">
            <h2 className="text-xl font-semibold mb-6">Live Preview</h2>
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateLesson;
