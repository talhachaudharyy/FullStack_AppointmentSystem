import React, { useState } from "react";
import axios from 'axios';

const AppointmentPopup = ({ onClose }) => {
  const availableTimeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    // Add more time slots as needed
  ];

  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    email: '',
    date: '',
    time: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:8000/user/appointments/', formData)
      .then((response) => {
        console.log('Appointment created:', response.data);
        setIsSuccess(true);
        setFormData({
          patientName: '',
          phoneNumber: '',
          email: '',
          date: '',
          time: '',
          address: '',
        });
      })
      .catch((error) => {
        console.error('Error creating appointment:', error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-2/3 h-2/3 overflow-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-950">
          Book an Appointment
        </h2>
        {isSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 mb-4 rounded">
            Appointment booked successfully!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="patientName" className="block text-sm mb-2 font-medium">
              Patient Name:
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={formData.patientName}
              placeholder="Enter Your Name"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label htmlFor="phoneNumber" className="block text-sm mb-2 font-medium">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter Your Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="email" className="block text-sm mb-2 font-medium">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter the Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label htmlFor="date" className="block text-xs mb-2 font-medium">
                Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
                min="2023-09-23" // Set your minimum date
                max="2023-12-31" // Set your maximum date
              />
            </div>
            <div className="w-1/2 pl-2">
              <label htmlFor="time" className="block text-sm mb-2 font-medium">
                Time:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
                required
                list="time-slots"
              />
              <datalist id="time-slots">
                {availableTimeSlots.map((slot) => (
                  <option key={slot} value={slot} />
                ))}
              </datalist>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm mb-2 font-medium">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover-bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Book Appointment
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Card = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="flex items-center md:w-1/2 md-ml-8 justify-between">
      <button
        onClick={togglePopup}
        className="bg-blue-500 hover:bg-blue-600 text-white mt-10 py-2 px-4 rounded-md"
      >
        Book an Appointment
      </button>
      {isPopupVisible && <AppointmentPopup onClose={togglePopup} />}
    </div>
  );
};

export default Card;
