import React, { useState } from "react";
import { X, Phone, MapPin, Calendar, MessageCircle } from "lucide-react";

const travels = [
  {
    name: "Sikkim Adventures",
    contact: "+919876543210",
    location: "Gangtok, Sikkim",
    description: "Guided trekking, sightseeing, and cultural tours across Sikkim.",
  },
  {
    name: "Himalayan Explorers",
    contact: "+919123456780",
    location: "Pelling, West Sikkim",
    description: "Local sightseeing tours and spiritual journeys to monasteries.",
  },
  {
    name: "Sikkim Trekking Co.",
    contact: "+919988776655",
    location: "Namchi, South Sikkim",
    description: "Adventure treks, mountain trails, and cultural experiences.",
  },
  {
    name: "Eco Sikkim Tours",
    contact: "+919874433221",
    location: "Lachung, North Sikkim",
    description: "Eco-friendly tours, village visits, and nature trails.",
  },
];

const hotels = [
  {
    name: "Mountain View Resort",
    location: "Gangtok, East Sikkim",
    itinerary: "2 nights stay + breakfast, city tour, monastery visit",
    contact: "+919871122334",
  },
  {
    name: "Peaceful Stay Inn",
    location: "Pelling, West Sikkim",
    itinerary: "3 nights stay + breakfast, local sightseeing, cultural events",
    contact: "+919887766554",
  },
  {
    name: "Blue Horizon Hotel",
    location: "Namchi, South Sikkim",
    itinerary: "2 nights stay + breakfast, temple visit, local excursions",
    contact: "+919876655443",
  },
  {
    name: "Golden Valley Resort",
    location: "Lachung, North Sikkim",
    itinerary: "3 nights stay + breakfast, trekking, cultural experiences",
    contact: "+919765432189",
  },
];

const LocalTravelsHotels = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleBookingClick = (hotel) => {
    setSelectedHotel(hotel);
    setBookingOpen(true);
  };

  const contactWhatsapp = (number) => {
    const url = `https://wa.me/${number.replace(/\D/g, "")}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative min-h-screen font-sans">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/book.jpg')" }} // replace with your image
      ></div>

      {/* Navbar */}
      <div className="h-[10vh] bg-white/70 backdrop-blur-md w-full fixed top-0 z-50 flex items-center justify-between px-4 shadow-md">
        {/* Logo */}
        <div className="flex items-center lg:w-[20%] w-[60%] h-[90%]">
          <div className='lg:w-[14%] w-[20%] h-[90%] bg-[url("/re_logo.png")] bg-cover bg-center'></div>
          <div className="ml-2">
            <h1 className="text-black font-bold lg:text-[1.5rem] text-[1rem]">
              Culture Lens
            </h1>
            <h1 className="text-black text-[12px] text-center">
              About Sikkim Monasteries
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[30%] h-[90%] items-center justify-between">
          <ul className="w-full flex items-center justify-evenly list-none text-[1.1rem]">
            <li className="cursor-pointer">
              <a href="#travels" className="text-black">Travels</a>
            </li>
            <li className="cursor-pointer">
              <a href="#hotels" className="text-black">Hotels</a>
            </li>
            <li className="cursor-pointer">
              <a href="#footer" className="text-black">Connect Us</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Page Content */}
      <div className="relative z-10 px-6 pt-28 pb-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-black mb-12">
          Explore Local Travels & Hotels
        </h1>

        {/* Travels Section */}
        <section id="travels" className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6">Local Travel Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {travels.map((travel, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{travel.name}</h3>
                  <p className="text-gray-700 mb-2">{travel.description}</p>
                  <p className="flex items-center gap-2 text-gray-800 mb-1"><MapPin size={16}/> {travel.location}</p>
                  <p className="flex items-center gap-2 text-gray-800 mb-4"><Phone size={16}/> {travel.contact}</p>
                </div>
                <button
                  onClick={() => contactWhatsapp(travel.contact)}
                  className="w-full py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16}/> Contact Us
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Hotels Section */}
        <section id="hotels" className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6">Hotels & Itineraries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hotels.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{hotel.name}</h3>
                  <p className="flex items-center gap-2 text-gray-800 mb-1"><MapPin size={16}/> {hotel.location}</p>
                  <p className="text-gray-700 mb-2">{hotel.itinerary}</p>
                  <p className="flex items-center gap-2 text-gray-800 mb-4"><Phone size={16}/> {hotel.contact}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleBookingClick(hotel)}
                    className="w-full py-2 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2"
                  >
                    <Calendar size={16} /> Book Now
                  </button>
                  <button
                    onClick={() => contactWhatsapp(hotel.contact)}
                    className="w-full py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16}/> Contact Us
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Popup */}
        {bookingOpen && selectedHotel && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
              <button
                onClick={() => setBookingOpen(false)}
                className="absolute top-3 right-3 bg-gray-200 p-1 rounded-full hover:bg-gray-800 hover:text-white transition"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl font-bold mb-4 text-black">Book Your Stay</h2>
              <p className="text-gray-700 mb-4">You are booking at <span className="font-semibold text-yellow-500">{selectedHotel.name}</span></p>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="border px-3 py-2 rounded-lg"/>
                <input type="email" placeholder="Email" className="border px-3 py-2 rounded-lg"/>
                <input type="tel" placeholder="Phone" className="border px-3 py-2 rounded-lg"/>
                <button className="py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">Confirm Booking</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalTravelsHotels;
