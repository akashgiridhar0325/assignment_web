"use client";
import React, { useState } from "react";
import { login } from "../utils/api"; // Import the API function
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const result = await login(email, password);
      localStorage.setItem("token", result.token); // Store token in localStorage
      alert("Login successful!");
      // Optionally, redirect to a new page (e.g., home or dashboard)
      window.location.href = "/home"; // Or use Next.js `useRouter()` for programmatic navigation
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-md">
      {/* Email input */}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md text-gray-900"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md text-gray-900"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
      >
        Login
      </button>

      {/* Sign-up Redirect */}
      <p className="text-center text-sm text-gray-500">
        Not registered?{" "}
        <Link href="/auth/signup" className="text-blue-500 hover:underline">
          Sign up here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
