import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TopBar = () => (
  <div className="w-full bg-[#0b0b0c] border-b border-white/6 backdrop-blur-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900/60 border border-white/8 flex items-center justify-center text-white font-bold">
              DS
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-neutral-100">DataSecure</div>
              <div className="text-xs text-neutral-400">Prevent data breaches</div>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/lessons">
            <Button variant="ghost" className="px-3 py-2 text-sm text-neutral-200/90 border border-white/6">Lessons</Button>
          </Link>
          <Link to="/login">
            <Button className="px-3 py-2 text-sm rounded-md bg-white text-black">Sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="bg-[#0b0b0c]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-linear-to-b from-neutral-200 to-neutral-400">
          Your Guide to Understanding Data Breaches
        </h1>
        <p className="mt-5 text-neutral-400 max-w-3xl mx-auto">
          Practical lessons, real scenarios, and interactive quizzes — designed to teach you how breaches happen and how to prevent them.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to="/lessons">
            <Button className="px-6 py-3 rounded-md bg-white text-black font-semibold">Get Started</Button>
          </Link>
          <Link to="#how">
            <Button variant="ghost" className="px-5 py-3 border border-white/6 text-neutral-200">How it works</Button>
          </Link>
        </div>
      </div>

      <div className="mt-12 max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/6 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
        <img
          src="https://compliancy-group.com/wp-content/uploads/2025/09/August-2025-Healthcare-Data-Breach-Report-scaled.png"
          alt="hero"
          className="w-full h-[420px] object-cover"
        />
      </div>
    </div>
  </section>
);

const Feature = ({ title, desc, icon }) => (
  <div className="p-6 rounded-xl bg-white/3 border border-white/6">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-lg bg-neutral-900/60 border border-white/6 flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-neutral-100">{title}</div>
        <div className="text-sm text-neutral-400 mt-2">{desc}</div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <section className="bg-[#0b0b0c] py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 className="text-center text-2xl font-semibold text-neutral-100">Powerful Features for Security Learning</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Feature
          title="Scenario-Based Lessons"
          desc="Real-world breach scenarios that teach practical defensive actions."
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>}
        />
        <Feature
          title="Interactive Quizzes"
          desc="Short quizzes at the end of every lesson to reinforce learning."
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5"/></svg>}
        />
        <Feature
          title="Industry Insights"
          desc="Contextual data and trends to help you prioritize protections."
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="currentColor" strokeWidth="1.5"/><path d="M6 6v12" stroke="currentColor" strokeWidth="1.5"/></svg>}
        />
        <Feature
          title="Progress Tracking"
          desc="Track lesson progress, quiz scores and improvement over time."
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="currentColor" strokeWidth="1.5"/></svg>}
        />
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-[#0b0b0c] py-12 border-t border-white/4">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-2xl font-bold text-neutral-100">50+</div>
          <div className="text-sm text-neutral-400 mt-1">Industries Covered</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-neutral-100">1000+</div>
          <div className="text-sm text-neutral-400 mt-1">Interview Questions</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-neutral-100">95%+</div>
          <div className="text-sm text-neutral-400 mt-1">Success Rate</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-neutral-100">24/7</div>
          <div className="text-sm text-neutral-400 mt-1">AI Support</div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how" className="bg-[#0b0b0c] py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h3 className="text-center text-2xl font-semibold text-neutral-100">How It Works</h3>
      <p className="text-center text-neutral-400 mt-2 max-w-2xl mx-auto">Four steps to learn, practice and secure systems.</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="text-center p-6 rounded-xl bg-white/3 border border-white/6">
          <div className="w-12 h-12 rounded-full bg-white/30 mx-auto flex items-center justify-center text-white"><p className="text-xl font-bold">1</p></div>
          <div className="font-semibold text-neutral-100 mt-4">Onboard</div>
          <div className="text-sm text-neutral-400 mt-2">Share role info for tailored lessons.</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-white/3 border border-white/6">
        <div className="w-12 h-12 rounded-full bg-white/30 mx-auto flex items-center justify-center text-white"><p className="text-xl font-bold">2</p></div>
          <div className="font-semibold text-neutral-100 mt-4">Learn</div>
          <div className="text-sm text-neutral-400 mt-2">Short lessons with practical examples.</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-white/3 border border-white/6">
        <div className="w-12 h-12 rounded-full bg-white/30 mx-auto flex items-center justify-center text-white"><p className="text-xl font-bold">3</p></div>
          <div className="font-semibold text-neutral-100 mt-4">Practice</div>
          <div className="text-sm text-neutral-400 mt-2">Mock quizzes and instant feedback.</div>
        </div>
        <div className="text-center p-6 rounded-xl bg-white/3 border border-white/6">
        <div className="w-12 h-12 rounded-full bg-white/30 mx-auto flex items-center justify-center text-white"><p className="text-xl font-bold">4</p></div>
          <div className="font-semibold text-neutral-100 mt-4">Track</div>
          <div className="text-sm text-neutral-400 mt-2">Monitor progress on your dashboard.</div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ avatar, name, role, quote }) => (
  <div className="p-6 rounded-xl bg-white/3 border border-white/6">
    <div className="flex gap-4">
      <Avatar className="w-12 h-12"><img src={avatar} alt={name} /></Avatar>
      <div>
        <div className="font-semibold text-neutral-100">{name}</div>
        <div className="text-sm text-neutral-400">{role}</div>
        <div className="mt-3 text-sm text-neutral-300">"{quote}"</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="bg-[#0b0b0c] py-16 border-t border-white/4">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h3 className="text-center text-2xl font-semibold text-neutral-100">What Our Users Say</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <TestimonialCard avatar="https://i.pravatar.cc/80?img=12" name="Sarah Chen" role="Security Engineer" quote="The course helped me secure critical systems quickly." />
        <TestimonialCard avatar="https://i.pravatar.cc/80?img=32" name="Michael Rodriguez" role="DevOps" quote="Realistic scenarios prepared me for incident response." />
        <TestimonialCard avatar="https://i.pravatar.cc/80?img=8" name="Priya Patel" role="Product Manager" quote="Clear, concise, and immediately useful." />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0b0b0c] border-t border-white/6 mt-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neutral-900/60 flex items-center justify-center text-white font-bold">DS</div>
            <div>
              <div className="font-semibold text-neutral-100">DataSecure</div>
              <div className="text-sm text-neutral-400">Understanding Data Breaches</div>
            </div>
          </div>
          <p className="text-sm text-neutral-400 mt-4 max-w-md">An educational product focused on real-world breach scenarios and practical mitigation steps.</p>
        </div>
        <div className="flex gap-12">
          <div>
            <div className="font-medium text-neutral-100">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><Link to="/lessons" className="hover:underline">Lessons</Link></li>
              <li><Link to="/scoreboard" className="hover:underline">Scoreboard</Link></li>
              <li><a href="#how" className="hover:underline">How it works</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-neutral-100">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/6 pt-6 flex items-center justify-between text-sm text-neutral-500">
        <div>© {new Date().getFullYear()} DataSecure. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Landing() {
  return (
    <div className="bg-[#0b0b0c] min-h-screen text-neutral-100">
      <TopBar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
