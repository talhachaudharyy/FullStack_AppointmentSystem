import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unsetUserInfo } from '../features/userSlice';
import { removeToken } from '../services/LocalStorageService';
import { unSetUserToken } from '../features/authSlice';
import Navbar from '../components/Navbar';

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: '', email: '' }));
    dispatch(unSetUserToken({ access_token: null }));
    removeToken();
    navigate('/login');
  };

  const handleChangePassword = () => {
    // Check if newPassword and confirmPassword match
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Retrieve the access token from local storage
    const accessToken = localStorage.getItem('access_token');

    if (!accessToken) {
      setError('Access token not found. Please log in.');
      return;
    }

    // API request to change the password
    axios
      .post('http://127.0.0.1:8000/api/changepassword/', {
        password: newPassword,
        password2: confirmPassword,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      })
      .then(() => {
        setPasswordChangeSuccess(true);
        setNewPassword('');
        setConfirmPassword('');
        setError(null); // Clear any previous error messages
      })
      .catch((err) => {
        setError('Error changing password. Please try again later.');
        console.error(err);
      });
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
  
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
  
        if (!accessToken) {
          setError('Access token not found. Please log in.');
          return;
        }
  
        const response = await axios.get('http://127.0.0.1:8000/api/profile/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          cancelToken: source.token,
        });
  
        setUser(response.data);
        setError(null);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled by cleanup');
        } else {
          setError('Error fetching user information. Please try again later.');
          console.error('Axios error:', err);
  
          if (err.response) {
            console.error('Response data:', err.response.data);
            console.error('Response status:', err.response.status);
            console.error('Response headers:', err.response.headers);
          } else if (err.request) {
            console.error('Request data:', err.request);
          } else {
            console.error('Error message:', err.message);
          }
        }
      }
    };
  
    fetchData();
  
    return () => {
      source.cancel('Request canceled by cleanup');
    };
  }, []);
  

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="max-w-md mx-auto mt-5 bg-white shadow-md rounded p-8 space-y-6">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {user && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">User Information</h2>
            <p className="mb-2">
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p className="mb-5 ">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            {/* Add more user information fields as needed */}

            {/* Change Password */}
            <div className="mb-4 mt-5">
              <h3 className="text-lg font-semibold mb-2">Change Password</h3>
              <input
                type="password"
                placeholder="New Password"
                className="border p-2 rounded w-full mt-2 focus:border-blue-500 focus:outline-none"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="border p-2 rounded w-full mt-2 focus:border-blue-500 focus:outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                onClick={handleChangePassword}
                className="bg-blue-500 hover:bg-blue-600  text-white font-bold py-2 px-4 mt-5 rounded-lg"
              >
                Change Password
              </button>
              {passwordChangeSuccess && (
                <p className="text-green-500 mt-2">Password changed successfully.</p>
              )}
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mt-4 rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <div className='max-w-md mx-auto bg-white shadow-md rounded p-8'>
        {/* <AppointmentStatus/> */}
      </div>
    </div>
  );
}

export default Profile;
