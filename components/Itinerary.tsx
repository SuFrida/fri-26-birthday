"use client"

import MapPin from "./MapPin"

export default function Itinerary() {
  return (
    <div className="relative">
      <div className="relative bg-blood-red text-white p-6 mb-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center font-gothic">Itinerario de la Noche</h2>
        <p className="text-center mt-2 opacity-90">Sigue el sendero de la oscuridad a través de la noche</p>

        <div className="blood-drop"></div>
        <div className="blood-drop"></div>
        <div className="blood-drop"></div>
        <div className="blood-drop"></div>
        <div className="blood-drop"></div>
      </div>

      <MapPin />
    </div>
  )
}
