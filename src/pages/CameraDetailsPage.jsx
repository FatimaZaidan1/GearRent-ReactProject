import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBooking } from '../features/bookings/bookingSlice';

const CameraDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Example camera data – replace this with your fetched data or prop
  const camera = {
    id,
    name: 'Canon EOS R5',
    pricePerDay: 120,
    description: 'Mirrorless, 45MP, 8K Video',
    image: '/images/canon-eos-r5.jpg',
  };

  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleBookNow = () => {
    if (!pickupDate || !returnDate) {
      alert('Please select both pickup and return dates.');
      return;
    }

    // Dispatch booking info to Redux
    dispatch(
      addBooking({
        ...camera,
        pickupDate,
        returnDate,
        status: 'Confirmed',
      })
    );

    // Redirect to My Bookings Page
    navigate('/my-bookings');
  };

  return (
    <section className="bg-white py-12 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* Camera Image */}
        <div>
          <img
            src={camera.image}
            alt={camera.name}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Booking Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            ${camera.pricePerDay}
            <span className="text-base font-medium text-gray-500"> /day</span>
          </h2>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Pickup Date</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Return Date</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <button
              onClick={handleBookNow}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Now
            </button>

            <p className="text-center text-gray-500 text-sm mt-2">
              No credit card required to reserve
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto mt-12 px-6">
        <h3 className="text-2xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed">{camera.description}</p>
      </div>
    </section>
  );
};

export default CameraDetailsPage;
