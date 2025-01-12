import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from '../src/app/auth/components/SignUpForm';

describe('Sign-Up Form', () => {
  test('renders sign-up form fields', () => {
    render(<SignUpForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  test('validates password strength dynamically', async () => {
    render(<SignUpForm />);

    const passwordInput = screen.getByLabelText(/password/i);
    fireEvent.change(passwordInput, { target: { value: 'weak' } });

    expect(await screen.findByText(/password must be at least 8 characters/i)).toBeInTheDocument();
    fireEvent.change(passwordInput, { target: { value: 'Strong!1' } });
    expect(await screen.queryByText(/password must be at least 8 characters/i)).not.toBeInTheDocument();
  });
});
