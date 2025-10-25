"use client"

import { useEffect, useRef } from "react"

interface Location {
  id: number
  name: string
  address: string
  description: string
  note?: string
  coordinates: [number, number]
}

interface MapPinProps {
  locations?: Location[]
}

const defaultLocations: Location[] = [
  {
    id: 1,
    name: "Punto de Encuentro",
    address: "Depa de las Lesbianas",
    description: "Reunión inicial y pre-copeo vampírico",
    coordinates: [19.436253, -99.158415],
  },
  {
    id: 2,
    name: "Bar El Scary Witches",
    address: "Calle Oslo #3",
    description: "Primera parada - cócteles, comida y platiquita amena",
    coordinates: [19.42816678110613, -99.16347463426115],
  },
  {
    id: 3,
    name: "El Callejón de Génova",
    address: "Calle Génova #44",
    description: "Litros a buen precio y reggaeton (Opción 1)",
    note: "Se elige entre este y REVEN para seguir la fiesta.",
    coordinates: [19.42641994467418, -99.16391812527047],
  },
  {
    id: 3,
    name: "REVEN",
    address: "Calle Génova #59",
    description: "Botellas a buen precio y reggaeton (Opción 2)",
    note: "Se elige entre este y El Callejón de Génova para seguir la fiesta.",
    coordinates: [19.426010516589965, -99.16411030618228],
  },
  {
    id: 4,
    name: "Killens",
    address: "Calle Londres #104",
    description: "Antro para terminar la noche",
    coordinates: [19.426051197058626, -99.16257758189438],
  },
]

export default function MapPin({ locations = defaultLocations }: MapPinProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return

    // Load Leaflet dynamically
    const loadLeaflet = async () => {
      if (!mapRef.current) return

      const L = (await import("leaflet")).default

      // Add Leaflet CSS
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link")
        link.id = "leaflet-css"
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(link)
      }

      // Calculate center of all locations
      const avgLat = locations.reduce((sum, loc) => sum + loc.coordinates[0], 0) / locations.length
      const avgLng = locations.reduce((sum, loc) => sum + loc.coordinates[1], 0) / locations.length

      // Initialize map
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }

      const map = L.map(mapRef.current!).setView([avgLat, avgLng], 13)
      mapInstanceRef.current = map

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map)

      // Create custom numbered markers
      locations.forEach((location) => {
        const icon = L.divIcon({
          className: "custom-marker",
          html: `
            <div style="
              background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%);
              color: white;
              width: 36px;
              height: 36px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              display: flex;
              align-items: center;
              justify-content: center;
              border: 3px solid #fff;
              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
              font-weight: bold;
              font-size: 16px;
            ">
              <span style="transform: rotate(45deg);">${location.id}</span>
            </div>
          `,
          iconSize: [36, 36],
          iconAnchor: [18, 36],
          popupAnchor: [0, -36],
        })

        const marker = L.marker(location.coordinates, { icon }).addTo(map)

        marker.bindPopup(`
          <div style="font-family: system-ui; min-width: 200px;">
            <h3 style="color: #8B0000; font-weight: bold; margin: 0 0 8px 0; font-size: 16px;">
              ${location.id}. ${location.name}
            </h3>
            <p style="margin: 4px 0; font-size: 13px; color: #666;">
              📍 ${location.address}
            </p>
            <p style="margin: 8px 0 0 0; font-size: 13px; color: #333;">
              ${location.description}
            </p>
             ${location.note ? `<p style="margin: 8px 0 0 0; font-size: 12px; color: #8B0000; font-style: italic; border-top: 1px solid #eee; padding-top: 8px;">💡 ${location.note}</p>` : ""}
          </div>
        `)
      })

      // Draw route line connecting all locations
      const routeCoordinates = locations.map((loc) => loc.coordinates)
      L.polyline(routeCoordinates, {
        color: "#8B0000",
        weight: 3,
        opacity: 0.7,
        dashArray: "10, 10",
      }).addTo(map)
    }

    loadLeaflet()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
      }
    }
  }, [locations])

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div
        ref={mapRef}
        className="w-full h-[400px] rounded-lg overflow-hidden border-2 border-blood-red shadow-lg"
        style={{ zIndex: 1 }}
      />

      {/* Legend */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blood-red mb-4 font-gothic flex items-center tracking-wide">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          Ruta de la Noche
        </h3>
        <div className="space-y-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className="flex items-start space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blood-red to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                {location.id}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-sm">{location.name}</h4>
                <p className="text-gray-400 text-xs mt-1">{location.address}</p>
                <p className="text-gray-300 text-sm mt-2">{location.description}</p>
                {location.note && (
                  <p className="text-white text-xs mt-2 italic border-t border-gray-700 pt-2">💡 {location.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
