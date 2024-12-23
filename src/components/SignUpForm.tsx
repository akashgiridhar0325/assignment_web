import React, { useState, useEffect } from "react";
import { signUp } from "../utils/api"; // Import the API function

const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState(""); // Added username state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    specialChar: false,
    number: false,
    uppercase: false,
  });
  const [emailValid, setEmailValid] = useState({
    format: false,
    exists: false, // Will simulate the existence check
  });

  const validatePassword = (password: string) => {
    setPasswordValid({
      length: password.length >= 8,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
    });
  };

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid({
      format: emailPattern.test(email),
      exists: false,
    });
  };

  const checkEmailExists = () => {
    const dummyExistingEmail = "test@example.com"; // Simulated email
    setEmailValid((prevState) => ({
      ...prevState,
      exists: email === dummyExistingEmail,
    }));
  };

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  const isPasswordValid =
    passwordValid.length &&
    passwordValid.specialChar &&
    passwordValid.number &&
    passwordValid.uppercase;

  useEffect(() => {
    validateEmail(email);
    checkEmailExists();
  }, [email]);

  const isFormValid = username && email && password && isPasswordValid && !emailValid.exists && emailValid.format;

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await signUp(username, email, password); // Send username, email, and password
      localStorage.setItem("token", result.token); // Store token in localStorage
      alert("Signup successful!");
      // Optionally, redirect to a new page (e.g., home or dashboard)
      window.location.href = "/home"; // Or use Next.js `useRouter()` for programmatic navigation
    } catch (error) {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Email validation messages */}
        <div className="text-sm mt-2">
          <p
            className={`${emailValid.format ? "text-green-500" : "text-red-500"}`}
          >
            {emailValid.format ? "Valid email format" : "Invalid email format"}
          </p>
          {emailValid.exists && (
            <p className="text-red-500 text-sm mt-2">This email is already registered.</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <input
          type="password"
          className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {/* Password strength requirements */}
      <div className="mb-4 text-sm text-gray-500">
        <p>Password must meet the following criteria:</p>
        <ul>
          <li className={`${passwordValid.length ? "text-green-500" : "text-red-500"}`}>
            At least 8 characters
          </li>
          <li className={`${passwordValid.specialChar ? "text-green-500" : "text-red-500"}`}>
            At least 1 special character (e.g., !, @, #, $, %, etc.)
          </li>
          <li className={`${passwordValid.number ? "text-green-500" : "text-red-500"}`}>
            At least 1 number
          </li>
          <li className={`${passwordValid.uppercase ? "text-green-500" : "text-red-500"}`}>
            At least 1 uppercase letter
          </li>
        </ul>
      </div>

      <button
        className={`w-full py-2 px-4 text-white rounded-md mt-4 ${isFormValid ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 cursor-not-allowed"}`}
        type="submit"
        disabled={!isFormValid} // Disable button if form is not valid
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
