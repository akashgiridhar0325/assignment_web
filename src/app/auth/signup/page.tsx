"use client";
import React from "react";
import SignUpForm from "@/components/SignUpForm";

const SignUpPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Sign Up
        </h1>
        <SignUpForm />
        <p className="text-center text-sm text-gray-500 mt-4">
          By signing up, you agree to our Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
