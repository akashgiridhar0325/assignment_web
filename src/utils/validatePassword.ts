export const validatePassword = (password: string): string => {
    if (!password) return "Password is empty.";
    const minLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
  
    if (minLength && hasNumber && hasSpecialChar) {
      return "Strong";
    }
    if (minLength && (hasNumber || hasSpecialChar)) {
      return "Medium";
    }
    return "Weak";
  };
  