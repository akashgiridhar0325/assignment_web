"use client";
import React, { useState } from "react";
import Link from "next/link"; // For navigation to the sign-up page

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", { email, password });
    // Add your login functionality here
  };

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-md">
      
      {/* Email input */}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-4 border rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded-md"
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
