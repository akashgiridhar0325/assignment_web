// src/utils/api.ts
const API_URL = 'http://localhost:5000/api/auth';  // Backend URL

// Signup API Call
export const signUp = async (username: string, email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    if (!response.ok) throw new Error('Signup failed');
    return await response.json();  // { token, username }
  } catch (error) {
    console.error('Error in signup:', error);
    throw error;
  }
};

// Login API Call
export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Login failed');
    return await response.json();  // { token, username, message }
  } catch (error) {
    console.error('Error in login:', error);
    throw error;
  }
};
