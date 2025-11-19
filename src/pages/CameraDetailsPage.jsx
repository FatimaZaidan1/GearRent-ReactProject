// src/pages/CameraDetailsPage.jsx (Updated)
import React, { useState, useEffect } from 'react';
// Added useLocation to read navigation state
import { useParams, NavLink, useNavigate, useLocation } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
// Added updateBooking to the import
import { addBooking, updateBooking } from '../features/bookings/bookingSlice'; 
import cameraData from '../data/cameraData'; // 👈 adjust path if needed

const CameraDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); // Initialize useLocation

  // Check if we are updating an existing booking by reading navigation state
  const bookingToUpdate = location.state?.bookingToUpdate;

  const [camera, setCamera] = useState(null);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [bookingMessage, setBookingMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // Load camera by ID and pre-fill dates if updating
  useEffect(() => {
    const foundCamera = cameraData.find(cam => String(cam.id) === id);
    if (foundCamera) {
      setCamera(foundCamera);
      
      // Pre-fill dates for update action
      if (bookingToUpdate) {
          setPickupDate(bookingToUpdate.pickupDate);
          setReturnDate(bookingToUpdate.returnDate);
      }
    }
    setLoading(false);
  }, [id, bookingToUpdate]); // Depend on bookingToUpdate to re-run on update route

  // Handle booking submit (now handles both New and Update)
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!pickupDate || !returnDate || new Date(pickupDate) >= new Date(returnDate)) {
      setBookingMessage('Please select valid pickup and return dates.');
      return;
    }

    const dayDifference = (new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24);
    const totalPrice = Math.ceil(dayDifference) * camera.price;
    let message = '';
    
    if (bookingToUpdate) {
        // --- UPDATE EXISTING BOOKING ---
        dispatch(
            updateBooking({
                bookingId: bookingToUpdate.bookingId,
                newPickupDate: pickupDate,
                newReturnDate: returnDate,
                newTotalPrice: totalPrice,
            })
        );
        message = `Booking updated successfully! Total estimated cost: $${totalPrice}`;
    } else {
        // --- ADD NEW BOOKING ---
        dispatch(
            addBooking({
                ...camera,
                pickupDate,
                returnDate,
                totalPrice,
                status: 'Confirmed',
            })
        );
        message = `Booking confirmed! Total estimated cost: $${totalPrice}`;
    }


    setBookingMessage(message);
    
    // Redirect to My Bookings page after a short delay
    setTimeout(() => {
      navigate('/my-bookings');
    }, 1200);
  };

  if (loading) {
    return <div className="text-center py-20 text-xl text-gray-700">Loading details...</div>;
  }

  if (!camera) {
    return <div className="text-center py-20 text-xl text-red-500">Error: Camera not found.</div>;
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <NavLink
        to="/cameras"
        className="text-gray-500 hover:text-[#FF8C00] transition duration-200 flex items-center mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all cameras
      </NavLink>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image and Details */}
        <div className="lg:col-span-2">
          <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden h-96 flex items-center justify-center p-6 mb-8">
            <img
              src={camera.imageUrl}
              alt={camera.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-1">{camera.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{camera.description}</p>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Camera Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{camera.detailedDescription}</p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Key Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {camera.specs.map((spec, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg text-center shadow-sm">
                  <p className="text-gray-800 font-medium text-sm">{spec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Booking Widget */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
            <div className="flex justify-end items-baseline border-b border-gray-200 pb-4 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">${camera.price}</span>
              <span className="text-gray-500 text-base font-medium ml-1">per day</span>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              {/* NOTE: Dates are pre-filled if bookingToUpdate exists */}
              <div>
                <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Date
                </label>
                <input
                  type="date"
                  id="pickupDate"
                  value={pickupDate}
                  onChange={(e) => {
                    setPickupDate(e.target.value);
                    setBookingMessage('');
                  }}
                  min={today}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-[#FF8C00] focus:border-[#FF8C00] text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Return Date
                </label>
                <input
                  type="date"
                  id="returnDate"
                  value={returnDate}
                  onChange={(e) => {
                    setReturnDate(e.target.value);
                    setBookingMessage('');
                  }}
                  min={pickupDate || today}
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-[#FF8C00] focus:border-[#FF8C00] text-base"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg text-white font-bold text-lg bg-[#FF8C00] hover:bg-orange-600 transition duration-300 shadow-md mt-6"
              >
                {/* Dynamically change button text */}
                {bookingToUpdate ? 'Update Booking' : 'Book Now'}
              </button>

              {bookingMessage ? (
                <p
                  className={`text-center font-medium ${
                    bookingMessage.includes('confirmed') || bookingMessage.includes('updated')
                      ? 'text-green-600'
                      : 'text-red-500'
                  } pt-2`}
                >
                  {bookingMessage}
                </p>
              ) : (
                <p className="text-center text-gray-500 text-sm mt-2">
                  No credit card required to reserve
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraDetailsPage;