import React, { useEffect, useState, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import "./SikkimMap.css";

const allPointsOfInterestData = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    lat: 27.2996,
    lng: 88.5986,
    type: 'monastery',
    description: "One of Sikkim's largest and most significant monasteries, known for its Golden Stupa.",
    imageUrl: "/img1.jpg"
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    lat: 27.3510,
    lng: 88.2435,
    type: 'monastery',
    description: "An ancient Nyingma monastery near Pelling, offering stunning views of Mt. Kanchenjunga.",
    imageUrl: "/img1.jpg"
  },
  {
    id: "encheymonastery",
    name: "Enchey Monastery",
    location: "Gangtok, East Sikkim",
    lat: 27.3371,
    lng: 88.6180,
    type: 'monastery',
    description: "A serene monastery in Gangtok, known for its beautiful murals and religious masked dances.",
    imageUrl: "/img1.jpg"
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    location: "Near Yuksom, West Sikkim",
    lat: 27.3005,
    lng: 88.3090,
    type: 'monastery',
    description: "Considered the most sacred monastery in Sikkim, with a revered 'Bumchu' ceremony.",
    imageUrl: "/img1.jpg"
  },
  {
    id: "phedang",
    name: "Phodong Monastery",
    location: "North Sikkim",
    lat: 27.4727,
    lng: 88.5303,
    type: 'monastery',
    description: "One of the six major monasteries in Sikkim, known for its ancient murals and vibrant festivals.",
    imageUrl: "/img1.jpg"
  },
  {
    id: "rinchenpong",
    name: "Rinchenpong Monastery",
    location: "West Sikkim",
    lat: 27.2845,
    lng: 88.2427,
    type: 'monastery',
    description: "A tranquil monastery offering panoramic views of the Himalayas.",
    imageUrl: "/img1.jpg"
  },
  {
    id: "do-drulchorten",
    name: "Do Drul Chorten",
    location: "Gangtok, East Sikkim",
    lat: 27.3275,
    lng: 88.6049,
    type: 'monastery',
    description: "A large stupa built by Trulshik Rinpoche, surrounded by 108 prayer wheels.",
    imageUrl: "/img1.jpg"
  },
  {
    id: "dubdi",
    name: "Dubdi Monastery",
    location: "Yuksom, West Sikkim",
    lat: 27.3780,
    lng: 88.2045,
    type: 'monastery',
    description: "Sikkim's oldest monastery, established in 1701 by Chogyal Namgyal. Requires a hike to reach.",
    imageUrl: "/img1.jpg"
  },
  {
    id: "gorkhagompa",
    name: "Gorkha Gompa",
    location: "Lachung, North Sikkim",
    lat: 27.6890,
    lng: 88.7500,
    type: 'monastery',
    description: "A small, beautiful monastery in the picturesque village of Lachung.",
    imageUrl: "/img1.jpg"
  },
  {
    id: "labrang",
    name: "Labrang Monastery",
    location: "North Sikkim",
    lat: 27.5010,
    lng: 88.5410,
    type: 'monastery',
    description: "A historic monastery affiliated with the Nyingma sect, offering spiritual solace.",
    imageUrl: "/img1.jpg"
  },
  { id: "nathulapass", name: "Nathula Pass", location: "Gangtok, East Sikkim", lat: 27.3735, lng: 88.8258, type: 'attraction' },
  { id: "buddhapark", name: "Buddha Park (Ravangla)", location: "Yuksom, Sikkim", lat: 27.3182, lng: 88.3682, type: 'attraction' }, // More accurate for Buddha Park near Ravangla
  { id: "yumthangvalley", name: "Yumthang Valley", location: "Near Yuksom, Sikkim", lat: 27.8228, lng: 88.7082, type: 'attraction' },
  { id: "zeropoint", name: "Zero Point", location: "North Sikkim", lat: 27.8828, lng: 88.8522, type: 'attraction' }, // Further north than Yumthang
  { id: "tsomgolake", name: "Tsomgo Lake", location: "Ravangla, Sikkim", lat: 27.3797, lng: 88.7610, type: 'attraction' },
  { id: "chardham", name: "Char Dham (Solophok)", location: "Phodong, North Sikkim", lat: 27.2450, lng: 88.3510, type: 'attraction' } // Solophok near Namchi
];



const defaultMarkerIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="%23FF0000" stroke="%23FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -20]
});

const highlightedMarkerIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="%23FFD700" stroke="%23333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
});


function MapViewHandler({ selectedItemId, allPoints, openAllPopupsRef }) {
  const map = useMap();
  const markerRefs = useRef({});

  useEffect(() => {
    if (allPoints.length > 0) {
      const bounds = L.latLngBounds(allPoints.map(p => [p.lat, p.lng]));
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] });
      } else {
        map.setView([27.5330, 88.5122], 10);
      }
    } else {
      map.setView([27.5330, 88.5122], 10);
    }
  }, [map, allPoints]);

  useEffect(() => {
    if (selectedItemId) {
      const selectedItem = allPoints.find(item => item.id === selectedItemId);
      if (selectedItem) {
        map.flyTo([selectedItem.lat, selectedItem.lng], 14, {
          duration: 1.5,
        });
        if (openAllPopupsRef.current[selectedItemId]) {
          openAllPopupsRef.current[selectedItemId].openPopup();
        }
      }
    }
  }, [selectedItemId, map, allPoints, openAllPopupsRef]); 

  useEffect(() => {
    const timer = setTimeout(() => {
      Object.values(openAllPopupsRef.current).forEach(markerInstance => {
        if (markerInstance && typeof markerInstance.openPopup === 'function') {
          markerInstance.openPopup();
        }
      });
    }, 1000); 

    return () => clearTimeout(timer);
  }, [openAllPopupsRef]); // Dependency on the ref itself

  return null;
}


// --- Main SikkimInteractiveMap Component ---
const SikkimInteractiveMap = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const mapRef = useRef(); 
  const popupMarkerRefs = useRef({}); 

  const sikkimBoundaryData = useMemo(() => ({
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": { "name": "Sikkim" },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [88.08, 27.05], [88.80, 27.10], [88.90, 27.80],
              [88.20, 28.10], [87.90, 27.70], [88.08, 27.05]
            ]
          ]
        }
      }
    ]
  }), []);

  // Calculate initial map bounds
  const initialMapBounds = useMemo(() => {
    if (sikkimBoundaryData && sikkimBoundaryData.features.length > 0) {
      const geoJsonLayer = L.geoJSON(sikkimBoundaryData);
      return geoJsonLayer.getBounds();
    }
    const bounds = L.latLngBounds(allPointsOfInterestData.map(p => [p.lat, p.lng]));
    return bounds.isValid() ? bounds : L.latLngBounds([[27.4, 88.4], [27.6, 88.6]]);
  }, [sikkimBoundaryData]);


  const handleSidebarClick = (item) => {
    setSelectedItemId(item.id);
    if (popupMarkerRefs.current[item.id]) {
        popupMarkerRefs.current[item.id].openPopup();
    }
  };


  return (
    <section
      id="map-section"
      className="lg:h-[90vh] h-[50vh] bg-white w-full flex flex-row justify-center items-center overflow-hidden"
    >
      <div className="w-[80%] h-[90%] bg-white flex flex-col justify-center items-center relative">
        <div className='w-full h-full overflow-hidden z-0'> 
            <MapContainer
                ref={mapRef}
                bounds={initialMapBounds}
                zoom={10}
                scrollWheelZoom={true}
                maxBoundsViscosity={1.0}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {allPointsOfInterestData.map(item => (
                    <Marker
                        key={item.id}
                        position={[item.lat, item.lng]}
                        icon={selectedItemId === item.id ? highlightedMarkerIcon : defaultMarkerIcon}
                        eventHandlers={{
                            click: () => setSelectedItemId(item.id),
                        }}
                        ref={ (el) => { if (el) popupMarkerRefs.current[item.id] = el; } }
                    >
                        <Popup>
                            <div className="monastery-popup">
                                {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
                                <h3>{item.name}</h3>
                                <p>📍 {item.location}</p>
                                {item.description && <p>{item.description}</p>}
                            </div>
                        </Popup>
                    </Marker>
                ))}

                <MapViewHandler
                    selectedItemId={selectedItemId}
                    allPoints={allPointsOfInterestData}
                    openAllPopupsRef={popupMarkerRefs} 
                />
            </MapContainer>
        </div>

      </div>

      <div className="hidden lg:w-[30%] lg:h-[90%] bg-blue-300 rounded-[10px] lg:flex flex-col items-center justify-start gap-2 p-4 overflow-y-auto">
        <h1 className="text-[1.7rem] font-bold text-white mb-4">Monasteries & Attractions</h1>

        {allPointsOfInterestData.map((item, index) => (
          <div
            key={item.id}
            className={`w-[90%] min-h-[70px] bg-white flex flex-row items-center justify-evenly rounded-[10px] cursor-pointer p-2 ${selectedItemId === item.id ? 'active-sidebar-item' : ''} hover:bg-gray-100 transition-all duration-200`}
            onClick={() => handleSidebarClick(item)}
          >
            <div className="w-[40px] h-[40px] rounded-[50%] bg-yellow-300 text-[1.2rem] flex items-center justify-center font-bold text-gray-800 flex-shrink-0">
              {index + 1}
            </div>
            <div className="w-[70%] h-full flex flex-col justify-evenly pl-2">
              <h1 className="text-[1.1rem] font-bold text-gray-800">{item.name}</h1>
              <p className="text-[12px] text-gray-600">📍 {item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SikkimInteractiveMap;