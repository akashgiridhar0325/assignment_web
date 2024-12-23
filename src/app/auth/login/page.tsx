"use client";
import React, { useState } from "react";
import QRCodeLogin from "@/components/QRCodeLogin";
import LoginForm from "@/components/LoginForm";

const LoginPage: React.FC = () => {
  const [isQrLogin, setIsQrLogin] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Changed text color to a darker shade for better visibility */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Login
        </h1>
        
        {isQrLogin ? <QRCodeLogin email="" /> : <LoginForm />}

        <div className="flex justify-between items-center mt-6">
          <button
            className={`w-full py-2 px-4 text-white rounded-md ${
              isQrLogin ? "bg-blue-500" : "bg-gray-500"
            } hover:bg-blue-600`}
            onClick={() => setIsQrLogin(!isQrLogin)}
          >
            {isQrLogin ? "Login with Email/Password" : "Login with QR Code"}
          </button>
        </div>

        <p className="text-center text-sm text-gray-700 mt-4">
          By logging in, you agree to our Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
