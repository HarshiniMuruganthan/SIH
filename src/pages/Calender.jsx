import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const navigate = useNavigate();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const today = new Date();

  // Sikkim Events
  const events = {
    "2025-01-15": { name: "Losar (Tibetan New Year)", location: "Gangtok, Sikkim", description: "Traditional Tibetan New Year festival with dances and rituals." },
    "2025-04-14": { name: "Buddha Jayanti", location: "Gangtok", description: "Celebration of the birth of Lord Buddha." },
    "2025-05-01": { name: "Sikkim State Day", location: "Statewide", description: "Celebrates the formation of the state of Sikkim." },
    "2025-06-21": { name: "Saga Dawa Festival", location: "Rumtek Monastery", description: "Major Buddhist festival in Sikkim." },
    "2025-08-15": { name: "Independence Day Celebrations", location: "Gangtok", description: "National Independence Day events across Sikkim." },
    "2025-10-24": { name: "Dashain Festival", location: "Gangtok", description: "Major Hindu festival celebrated with family gatherings." },
    "2025-11-01": { name: "Tihar Festival", location: "Gangtok", description: "Festival of lights celebrated with prayers and rituals." },
    "2025-12-25": { name: "Christmas Celebrations", location: "Gangtok", description: "Celebration of Christmas with decorations and events." },
  };

  const handleDateClick = (dateStr) => {
    setSelectedEvent(events[dateStr] ? { date: dateStr, ...events[dateStr] } : { date: dateStr, name: null });
    setPopupOpen(true);
  };

  useEffect(() => setSelectedEvent(null), [popupOpen]);

  const handleBookEvent = () => {
    if (selectedEvent) {
      navigate("/book-event", { state: { event: selectedEvent } });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-10">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/calen.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-100/20"></div> {/* soft overlay */}
      </div>

      {/* Calendar Container */}
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-2xl rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <button onClick={prevMonth} className="p-2 hover:bg-white/20 rounded-full transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold">
            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
          </h2>
          <button onClick={nextMonth} className="p-2 hover:bg-white/20 rounded-full transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 text-center bg-white/30 backdrop-blur-sm border-b border-gray-200 text-gray-700 font-medium text-sm">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-2">{day}</div>
          ))}
        </div>

        {/* Dates Grid */}
        <div className="grid grid-cols-7">
          {Array(startDay).fill(null).map((_, i) => (
            <div key={i} className="h-20 border-r border-b"></div>
          ))}

          {Array.from({ length: totalDays }, (_, i) => {
            const dateNum = i + 1;
            const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(dateNum).padStart(2, "0")}`;
            const isToday = today.getDate() === dateNum && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
            const hasEvent = events[dateStr];

            return (
              <div
                key={dateNum}
                onClick={() => handleDateClick(dateStr)}
                className={clsx(
                  "h-20 p-2 border-b border-r flex flex-col justify-between cursor-pointer hover:bg-white/20 transition",
                  isToday && "bg-blue-100 border-blue-400 shadow-inner"
                )}
              >
                <div className="flex justify-end">
                  <span className={clsx("text-sm font-medium", isToday && "text-blue-600")}>{dateNum}</span>
                </div>
                {hasEvent && (
                  <div className="text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded truncate text-center">{hasEvent.name}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Popup */}
      {popupOpen && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-xl w-80 p-6 relative flex flex-col gap-4">
            <button onClick={() => setPopupOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold mb-2">{selectedEvent.name || "No Event"}</h3>
            {selectedEvent.name && (
              <>
                <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {selectedEvent.date}</p>
                <p className="text-sm text-gray-600 mb-1"><strong>Location:</strong> {selectedEvent.location}</p>
                <p className="text-sm text-gray-600"><strong>Info:</strong> {selectedEvent.description}</p>
              </>
            )}
            {selectedEvent.name && (
              <button
                onClick={handleBookEvent}
                className="mt-2 py-2 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400 transition"
              >
                Book Event
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
