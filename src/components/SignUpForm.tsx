import React, { useState, useEffect } from "react";

const SignUpForm: React.FC = () => {
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

  // Function to validate password based on rules
  const validatePassword = (password: string) => {
    setPasswordValid({
      length: password.length >= 8,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /\d/.test(password),
      uppercase: /[A-Z]/.test(password),
    });
  };

  // Function to validate email format
  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid({
      format: emailPattern.test(email),
      exists: false, // Reset email existence flag when the email is being typed
    });
  };

  // Simulate an email check (this will be replaced later with a database check)
  const checkEmailExists = () => {
    const dummyExistingEmail = "test@example.com"; // Simulated email for existence check
    setEmailValid((prevState) => ({
      ...prevState,
      exists: email === dummyExistingEmail,
    }));
  };

  // Update password validity state when password changes
  useEffect(() => {
    validatePassword(password);
  }, [password]);

  // Check if all password requirements are met
  const isPasswordValid =
    passwordValid.length &&
    passwordValid.specialChar &&
    passwordValid.number &&
    passwordValid.uppercase;

  // Check if the email is valid and not already existing
  useEffect(() => {
    validateEmail(email);
    checkEmailExists(); // Check email existence on change
  }, [email]);

  // Check if email and password are both filled and password is valid
  const isFormValid = email && password && isPasswordValid && !emailValid.exists && emailValid.format;

  return (
    <>
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
            className={`${
              emailValid.format ? "text-green-500" : "text-red-500"
            }`}
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
          <li
            className={`${
              passwordValid.length ? "text-green-500" : "text-red-500"
            }`}
          >
            At least 8 characters
          </li>
          <li
            className={`${
              passwordValid.specialChar ? "text-green-500" : "text-red-500"
            }`}
          >
            At least 1 special character (e.g., !, @, #, $, %, etc.)
          </li>
          <li
            className={`${
              passwordValid.number ? "text-green-500" : "text-red-500"
            }`}
          >
            At least 1 number
          </li>
          <li
            className={`${
              passwordValid.uppercase ? "text-green-500" : "text-red-500"
            }`}
          >
            At least 1 uppercase letter
          </li>
        </ul>
      </div>

      <button
        className={`w-full py-2 px-4 text-white rounded-md mt-4 ${
          isFormValid
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-500 cursor-not-allowed"
        }`}
        onClick={() => console.log("Sign Up:", email, password)}
        disabled={!isFormValid} // Disable button if form is not valid
      >
        Sign Up
      </button>
    </>
  );
};

export default SignUpForm;
