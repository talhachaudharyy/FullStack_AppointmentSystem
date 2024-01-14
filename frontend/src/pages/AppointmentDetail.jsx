import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
const AppointmentDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    // Fetch data for the specific doctor using the doctor ID
    fetch(`http://127.0.0.1:8000/user/doctors/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDoctor(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [id]);

  // Display loading state while fetching data
  if (!doctor) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-8">
        <div className="max-w-screen-md w-full bg-white p-8 rounded-lg shadow-md flex">
          <div className="w-1/2 pr-8">
            <img
              src={doctor.image}
              alt={doctor.doctor_name}
              className="w-full h-auto rounded"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">{doctor.doctor_name}</h2>
            <p className="text-gray-600 mb-4">Specialization: {doctor.specialization}</p>
            <p className="text-gray-600 mb-4">Phone Number: {doctor.phone_number}</p>
            <p className="text-gray-600 mb-4">Email: {doctor.email}</p>
            <p className="text-gray-600 mb-4">Rate: ${doctor.rate}</p>
            {/* Add other details as needed */}
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Pay Now {doctor.rate}</button> */}
          <Card/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetail;
