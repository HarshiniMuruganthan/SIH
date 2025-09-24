import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const EventBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    alert(
      `✅ Booking Confirmed for ${formData.name}!\n\nEvent: ${event.name}\nDate: ${event.date}\nLocation: ${event.location}`
    );
    navigate("/"); // redirect to homepage or confirmation page
  };

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">
          No event selected. Please go back to the calendar.
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/book.jpg" // 🔹 Replace with your background image path
          alt="background"
          className="w-full h-full object-cover opacity-40" // 👈 reduced opacity here
        />
      </div>

      {/* Payment Container */}
      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl w-full max-w-md p-6 relative z-10">
        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        {/* Event Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          {event.name} Booking
        </h1>

        {/* Event Summary */}
        <div className="mb-6 border-b pb-4 text-center">
          <p className="text-lg font-semibold text-gray-800">{event.name}</p>
          <p className="text-gray-600">{event.date}</p>
          <p className="text-gray-600">{event.location}</p>
          <p className="text-xl font-bold text-yellow-600 mt-2">
            ${event.price || "49.99"}
          </p>
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* User Info */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
            required
          />

          {/* Payment Info */}
          <div className="border rounded-lg p-4 bg-white/70">
            <h3 className="font-semibold mb-2">Payment Method</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg mb-2"
              required
            />
            <div className="flex gap-2">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="w-1/2 border px-3 py-2 rounded-lg"
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleChange}
                className="w-1/2 border px-3 py-2 rounded-lg"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            Confirm & Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventBooking;
