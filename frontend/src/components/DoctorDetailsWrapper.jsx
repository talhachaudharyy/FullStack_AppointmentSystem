import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DoctorDetailsWrapper() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
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

  if (!doctor) {
    return <p>Loading...</p>;
  }

  return <AppointmentDetail doctor={doctor} />;
}

export default DoctorDetailsWrapper;
