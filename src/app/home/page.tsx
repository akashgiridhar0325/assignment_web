// src/app/home/page.tsx
"use client"; // Ensure this is a client-side component

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

const Home = () => {
  const router = useRouter(); // Now using next/navigation

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect to login if no token is found
    }
  }, [router]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a protected page that requires login.</p>
    </div>
  );
};

export default Home;
