// src/app/index.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/home'); // Redirect to home page if token exists
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center p-6 w-full max-w-md">
      <h1 className="text-2xl font-semibold mb-4">Welcome to Our App</h1>
      <p className="mb-4">Please log in or sign up to continue.</p>
      <div className="flex gap-4">
        <a
          href="/auth/login"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
        >
          Login
        </a>
        <a
          href="/auth/signup"
          className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Index;
