import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/header-logo.png';
import { storeToken, getToken } from '../services/LocalStorageService';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Check if the user has an access token
  const { access_token } = getToken();

  useEffect(() => {
    if (access_token) {
      // If the user already has an access token, redirect to the home page
      navigate('/');
    }
  }, [access_token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/login/', formData);

      if (response.status === 200) {
        storeToken(response.data.token);
        console.log('Token Stored');
        navigate('/');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);

      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 401) {
          setError('Invalid email or password. Please try again.');
        } else {
          setError('Login failed. Please try again later.');
        }
      } else if (error.request) {
        // The request was made but no response was received
        setError('No response from the server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError('Unexpected error. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {access_token ? 'You are already registered.' : 'Login to your account'}
          </h2>
        </div>

        {!access_token && (
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Enter Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <Link to="/forget-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </form>

            {error && (
              <p className="mt-2 text-center text-sm text-red-500">{error}</p>
            )}

            <p className="mt-6 text-center text-sm text-gray-500">
              Not a member?{' '}
              <Link
                to="/signup"
                className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Signup Here
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
