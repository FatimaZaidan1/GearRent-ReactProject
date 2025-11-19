import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Added useDispatch
import { useNavigate } from "react-router-dom"; // Added useNavigate
import { deleteBooking } from "../features/bookings/bookingSlice"; // Added deleteBooking

const MyBookingsPage = () => {
  const bookings = useSelector((state) => state.bookings.bookings);
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize navigate

  // Handler for deleting a booking
  const handleDeleteBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      dispatch(deleteBooking(bookingId));
    }
  };

  // Handler for updating a booking
  const handleUpdateBooking = (booking) => {
    // Navigate to the camera details page (using the camera's ID)
    // and pass the existing booking data in the 'state' property.
    navigate(`/camera/${booking.id}`, { state: { bookingToUpdate: booking } });
  };

  return (
    <section className="bg-white py-16 min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Bookings</h1>

        {bookings.length === 0 ? (
          <p className="text-gray-600 text-lg">You have no bookings yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookings.map((booking) => (
              <div
                key={booking.bookingId} // Use bookingId as the key
                className="border rounded-lg shadow-md p-6 bg-gray-50 transition hover:shadow-lg"
              >
                <img
                  src={booking.imageUrl}
                  alt={booking.title} // Use booking.title for accessibility
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {booking.title} {/* Use the correct property name: title */}
                </h2>

                <p className="text-gray-600">
                  <strong>Pickup Date:</strong> {booking.pickupDate} {/* Use the correct property name: pickupDate */}
                </p>

                <p className="text-gray-600">
                  <strong>Return Date:</strong> {booking.returnDate} {/* Use the correct property name: returnDate */}
                </p>

                <p className="text-gray-600">
                  <strong>Total Price:</strong> ${booking.totalPrice}
                </p>

                <p className="text-blue-600 font-semibold mt-2 mb-4">
                  Status: {booking.status}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <button
                        onClick={() => handleUpdateBooking(booking)}
                        className="flex-1 py-2 rounded-lg text-white font-bold bg-blue-500 hover:bg-blue-600 transition duration-300"
                    >
                        Update
                    </button>
                    <button
                        onClick={() => handleDeleteBooking(booking.bookingId)}
                        className="flex-1 py-2 rounded-lg text-white font-bold bg-red-500 hover:bg-red-600 transition duration-300"
                    >
                        Delete
                    </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookingsPage;