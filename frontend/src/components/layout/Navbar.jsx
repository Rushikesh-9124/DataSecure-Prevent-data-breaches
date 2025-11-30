import React from "react";
import { useUserStore } from "../../store/userStore";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { user, logout } = useUserStore();

  return (
    <nav className="w-full border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto py-4 flex items-center justify-between">
        
        <a href="/" className="text-2xl font-bold tracking-tight">
          DataSecure
        </a>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <a href="/lessons" className="text-sm hover:underline">Lessons</a>
              <a href="/scoreboard" className="text-sm hover:underline">Scoreboard</a>

              <Button variant="destructive" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <a href="/login" className="text-sm hover:underline">Login</a>
              <a href="/register" className="text-sm hover:underline">Register</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
