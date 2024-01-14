"use client";

import { useEffect, useState } from 'react';
import React from 'react';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/user/doctors/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);


  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <p className="text-sm font-bold pt-4 md:pt-8 pb-4 md:pb-7 px-4 md:px-9 text-blue-600">PROFESSIONAL DOCTOR</p>
          <h2 className="text-xl md:text-3xl pb-4 md:pb-5 font-bold ml-4 md:ml-9 text-blue-950">Meet Our Experienced Doctors</h2>
        </div>
        <div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 mb-6 md:mb-14 mx-4 md:mx-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-4 rounded-lg shadow">
            <img
              src={doctor.image}
              alt={doctor.doctor_name}
              className="w-full h-auto rounded"
            />
            <p className="mt-4 text-lg font-bold text-center text-blue-950">{doctor.doctor_name}</p>
            <p className="text-sm mt-2 text-center text-blue-700">{doctor.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
