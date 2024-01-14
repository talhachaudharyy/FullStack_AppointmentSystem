import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
const ResetPassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password === confirmPassword) {
      try {
        // Send a POST request to reset the password
        const response = await axios.post(
          `http://127.0.0.1:8000/api/reset-password/${id}/${token}/`,
          {
            password: password,
            password2: confirmPassword,
          }
        );

        if (response.status === 200) {
          setMessage('Password reset successfully.');
          // Redirect to the login page or another page after resetting the password
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          setMessage('Error resetting password.');
        }
      } catch (error) {
        setMessage('Error resetting password.');
      }
    } else {
      setMessage('Passwords do not match.');
    }
  };

  return (
    <>
     <Navbar />

<div className="min-h-full mt-16 flex items-center justify-center">
  <div className="bg-white shadow-md rounded-lg p-8 w-full sm:w-96">
    <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
    <form onSubmit={handlePasswordReset}>
      <div className="mb-4">
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
      >
        Reset Password
      </button>
    </form>
    <p className="mt-4 text-green-500">{message}</p>
  </div>
</div>
    </>
       
  );
};

export default ResetPassword;
