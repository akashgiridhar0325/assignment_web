"use client";
import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Welcome!</h1>
        <p className="text-gray-500 mb-6">
          Please choose an option to get started:
        </p>
        <div className="space-y-4">
          <Link
            href="/auth/login"
            className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 block text-center"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="w-full py-2 px-4 text-white bg-green-500 rounded-md hover:bg-green-600 block text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
