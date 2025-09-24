import React, { useState } from "react";
import { X, Headphones, Globe } from "lucide-react";

const monasteries = [
  {
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    image: "/rumtek.jpg",
    view360: "/rumtekvedio.mp4",
    text: "Rumtek Monastery, also known as the Dharma Chakra Centre, is one of the largest and most important monasteries in Sikkim...",
  },
  {
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    image: "/pemayangstay.jpg",
    view360: "/video360",
    text: "Pemayangtse Monastery, established in 1705 by Lama Lhatsun Chempo, is one of the oldest monasteries in Sikkim...",
  },
  {
    name: "Tashiding Monastery",
    location: "West Sikkim",
    image: "/tashiding.jpg",
    view360: "/tashiding360.mp4",
    text: "Tashiding Monastery, perched on a hilltop, is a spiritual center of the Nyingma sect and is known for its scenic beauty and sacred rituals...",
  },
];

const languages = [
  { label: "English", code: "en" },
  { label: "Hindi", code: "hi" },
 
];

const Monasteries = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [selectedLang, setSelectedLang] = useState("en");
  const [searchTerm, setSearchTerm] = useState("");

  const speakText = (text, lang) => {
    if (!window.speechSynthesis) {
      alert("Your browser does not support Text-to-Speech.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;

    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((v) => v.lang.startsWith(lang));
    if (voice) utterance.voice = voice;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handleAudioClick = (monastery) => {
    setSelectedMonastery(monastery);
    setPopupOpen(true);
    setSelectedLang("en");
  };

  const filteredMonasteries = monasteries.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative min-h-screen font-sans">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/bgr.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 w-full h-[10vh] z-50 bg-white flex items-center justify-between px-6 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[url('/re_logo.png')] bg-cover bg-center rounded-full"></div>
          <div>
            <h1 className="text-red font-bold text-xl">Culture Lens</h1>
            <h2 className="text-red text-sm">About sikkim Monasteries</h2>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md ml-6">
          <input
            type="text"
            placeholder="Search monasteries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-300"
          />
        </div>

        {/* Menu */}
     
      </div>

      {/* Page Content */}
      <div className="relative z-10 px-6 py-28">
        <h1
          className="text-5xl font-extrabold text-center text-white mb-12 drop-shadow-xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sacred Monasteries of Sikkim
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {filteredMonasteries.map((monastery, index) => (
            <div
              key={index}
              className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={monastery.image}
                  alt={monastery.name}
                  className="h-60 w-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-blue-900/80 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {monastery.location}
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {monastery.name}
                </h2>
                <p className="text-gray-200 text-sm mb-5 line-clamp-3">
                  Explore {monastery.name} with immersive 360° views and guided audio tours.
                </p>

                <div className="flex gap-3">
                  <a
                    href={monastery.view360}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition"
                  >
                    <Globe size={16} /> 360° View
                  </a>
                  <button
                    onClick={() => handleAudioClick(monastery)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600 transition"
                  >
                    <Headphones size={16} /> Audio Guide
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredMonasteries.length === 0 && (
            <p className="text-white text-center col-span-full">
              No monasteries found.
            </p>
          )}
        </div>

        {/* Popup */}
        {popupOpen && selectedMonastery && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full relative overflow-hidden">
              {/* Header Image */}
              <div className="relative w-full max-h-60 overflow-hidden">
                <img
                  src={selectedMonastery.image}
                  alt={selectedMonastery.name}
                  className="w-full h-auto object-cover"
                />
                <button
                  onClick={() => setPopupOpen(false)}
                  className="absolute top-3 right-3 bg-white/80 p-1 rounded-full hover:bg-red-500 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">
                  {selectedMonastery.name}
                </h2>
                <p className="text-gray-700 mb-4">{selectedMonastery.text}</p>

                <div className="mb-4">
                  <label className="block mb-2 font-medium">
                    Select Language:
                  </label>
                  <select
                    className="w-full border px-3 py-2 rounded-lg"
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() =>
                    speakText(selectedMonastery.text, selectedLang)
                  }
                  className="w-full flex items-center justify-center gap-2 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
                >
                  <Headphones size={18} /> Play Audio
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Monasteries;
