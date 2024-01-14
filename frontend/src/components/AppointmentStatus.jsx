import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AppointmentStatus() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch the appointment data
    axios.get('http://127.0.0.1:8000/user/appointments/4')
      .then(response => {
        // Extract the status from the response data
        const { status } = response.data;
        setStatus(status);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="w-full lg:w-1/2 p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Appointment Status</h2>
        <p className="mb-4">Status: {status}</p>
      </div>
    </div>
  );
}

export default AppointmentStatus;
