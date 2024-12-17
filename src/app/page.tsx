"use client"
import React, { useState } from 'react';
import ReactQR from 'react-qr-code';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isQrCodeVisible, setIsQrCodeVisible] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Track if user is signing up
  const [isQrLogin, setIsQrLogin] = useState(false); // Track if QR Code Login is selected

  const qrCodeData = `https://your-app.com/auth?email=${email}`;

  const handleSubmit = () => {
    if (isQrLogin) {
      setIsQrCodeVisible(true);
    } else {
      // Handle normal email/password login
      console.log('Logging in with email and password:', email, password);
    }
  };

  const handleSignUp = () => {
    console.log('Sign up with email and password:', email, password);
    // Implement sign-up logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h1>

        {/* Toggle between Sign Up and Login */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-blue-500"
          >
            {isSignUp ? 'Already have an account? Login' : 'Create an account'}
          </button>
        </div>

        {/* Conditional Form Fields */}
        <div className="mb-4">
          <input
            type="email"
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {!isQrLogin && (
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}

        {/* Toggle between QR Code Login and Normal Login */}
        <div className="flex justify-between items-center mb-6">
          <button
            className={`w-full py-2 px-4 text-white rounded-md ${isQrLogin ? 'bg-blue-500' : 'bg-gray-500'} hover:bg-blue-600`}
            onClick={() => setIsQrLogin(!isQrLogin)}
          >
            {isQrLogin ? 'Login with Email/Password' : 'Login with QR Code'}
          </button>
        </div>

        {/* Submit Button */}
        <button
          className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>

        {/* QR Code Display */}
        {isQrCodeVisible && !isSignUp && (
          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-4">Scan this QR code to log in:</p>
            <ReactQR value={qrCodeData} size={256} />
          </div>
        )}

        {/* Instructions */}
        {isQrCodeVisible && (
          <p className="text-center text-sm text-gray-500 mt-4">
            After scanning the QR code with your mobile app, you will be logged in.
          </p>
        )}

        {/* Terms and Conditions */}
        {!isQrCodeVisible && (
          <p className="text-center text-sm text-gray-500 mt-4">
            {isSignUp ? (
              <span>By signing up, you agree to our Terms and Conditions.</span>
            ) : (
              <span>By logging in, you agree to our Terms and Conditions.</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
