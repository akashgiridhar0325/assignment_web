"use client";
import React, { useState } from "react";

const PasswordStrengthChecker: React.FC<{ password: string }> = ({ password }) => {
  const [strengthMessage, setStrengthMessage] = useState("");

  const evaluateStrength = (password: string) => {
    if (!password) return "Password is empty";
    const lengthCheck = password.length >= 8;
    const numberCheck = /\d/.test(password);
    const specialCharCheck = /[!@#$%^&*]/.test(password);

    if (lengthCheck && numberCheck && specialCharCheck) return "Strong Password";
    if (lengthCheck && (numberCheck || specialCharCheck)) return "Medium Password";
    return "Weak Password";
  };

  React.useEffect(() => {
    setStrengthMessage(evaluateStrength(password));
  }, [password]);

  return (
    <p className={`text-sm mt-2 ${strengthMessage.includes("Weak") ? "text-red-500" : strengthMessage.includes("Medium") ? "text-yellow-500" : "text-green-500"}`}>
      {strengthMessage}
    </p>
  );
};

export default PasswordStrengthChecker;
