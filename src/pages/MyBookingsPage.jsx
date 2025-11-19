import React from "react";
import { useSelector } from "react-redux";

const MyBookingsPage = () => {
  const bookings = useSelector((state) => state.bookings.bookings);

  return (
    <section className="bg-white py-16 min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Bookings</h1>

        {bookings.length === 0 ? (
          <p className="text-gray-600 text-lg">You have no bookings yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md p-6 bg-gray-50 transition hover:shadow-lg"
              >
                <img
                  src={booking.image}
                  alt={booking.cameraName}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {booking.cameraName}
                </h2>

                <p className="text-gray-600">
                  <strong>Start Date:</strong> {booking.startDate}
                </p>

                <p className="text-gray-600">
                  <strong>End Date:</strong> {booking.endDate}
                </p>

                <p className="text-gray-600">
                  <strong>Total Price:</strong> ${booking.totalPrice}
                </p>

                <p className="text-blue-600 font-semibold mt-2">
                  Status: {booking.status}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookingsPage;
