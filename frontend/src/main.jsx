import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.jsx';
import store from './app/store.js';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Profile from './pages/Profile.jsx';
import ForgetPassword from './pages/forgetpassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import AppointmentBooking from './pages/AppointmentBooking.jsx';
import './index.css';
import AppointmentDetail from './pages/AppointmentDetail.jsx';


// Custom route guard for protected routes
const ProtectedRoute = ({ element, ...rest }) => {
  const accessToken = localStorage.getItem('access_token');
  return accessToken ? element : <Navigate to="/login" />;
};

// Custom route guard for the signup route
const GuestRoute = ({ element, ...rest }) => {
  const accessToken = localStorage.getItem('access_token');
  return accessToken ? <Navigate to="/" /> : element;
};

ReactDOM.render(
  
    <Provider store={store}>
        

    <Router>
      <Routes>
            
        <Route path="/" element={<App />} />
        <Route path="/doctor/:id" element={<AppointmentDetail/> } />

        <Route path="/signup" element={<GuestRoute element={<Signup />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/api/reset/:id/:token" element={<ResetPassword />} />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route
          path="/booking"
          element={<ProtectedRoute element={<AppointmentBooking /> } />}
        />
        <Route path="*" element={<h1 className='text-4xl'>Error 404 Page not found !!</h1>} />
      </Routes>
    </Router>
  
  </Provider>
 ,
  document.getElementById('root')
);
