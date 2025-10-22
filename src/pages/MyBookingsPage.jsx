import React from 'react';
import { useSelector } from 'react-redux';

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
                className="border border-gray-200 rounded-xl p-5 bg-gray-50 shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={booking.image}
                  alt={booking.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h2 className="text-2xl font-semibold">{booking.name}</h2>
                <p className="text-gray-600">{booking.description}</p>
                <p className="mt-2 font-medium">
                  {booking.pickupDate} → {booking.returnDate}
                </p>
                <p className="text-blue-600 font-semibold mt-1">
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
