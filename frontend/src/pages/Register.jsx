import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "@/utils/axiosInstance";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axiosInstance.post("/api/auth/register", {
        name,
        email,
        password,
      });

      if (res.data && res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0b0b0c] text-white relative flex items-center justify-center px-6">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md">

        <Card
          className="
            bg-neutral-900/40 
            backdrop-blur-xl 
            border border-white/10 
            shadow-[0_0_25px_rgba(0,0,0,0.45)]
            rounded-2xl
          "
        >

          <CardHeader className="text-center space-y-3 pb-2">
            <CardTitle
              className="
                text-3xl font-bold 
                bg-linear-to-b from-neutral-200 to-neutral-500
                bg-clip-text text-transparent
              "
            >
              Create Account
            </CardTitle>

            <CardDescription className="text-neutral-400 text-sm">
              Join the platform and continue your learning journey
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">

            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">Full Name</label>
              <Input
                type="text"
                placeholder="John Doe"
                className="
                  h-11 bg-neutral-800/50 border border-white/10
                  text-neutral-200 placeholder:text-neutral-500
                  focus:ring-2 focus:ring-white/20 rounded-xl
                "
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="
                  h-11 bg-neutral-800/50 border border-white/10
                  text-neutral-200 placeholder:text-neutral-500
                  focus:ring-2 focus:ring-white/20 rounded-xl
                "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-300">Password</label>
              <Input
                type="password"
                placeholder="Choose a secure password"
                className="
                  h-11 bg-neutral-800/50 border border-white/10
                  text-neutral-200 placeholder:text-neutral-500
                  focus:ring-2 focus:ring-white/20 rounded-xl
                "
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Register Button */}
            <Button
              onClick={handleRegister}
              className="
                w-full h-11 rounded-xl
                bg-white text-black font-semibold
                hover:bg-neutral-200 transition
              "
            >
              Create Account
            </Button>

            {/* OR Divider */}
            <div className="flex items-center gap-2">
              <span className="flex-1 h-px bg-neutral-700"></span>
              <span className="text-xs text-neutral-500">OR</span>
              <span className="flex-1 h-px bg-neutral-700"></span>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-neutral-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-neutral-200 hover:underline"
              >
                Login
              </Link>
            </p>

          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Register;
