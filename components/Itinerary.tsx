"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Wine, Music, Users, Lock } from "lucide-react"

export default function Itinerary() {
  const [activeTab, setActiveTab] = useState("timeline")

  return (
    <div className="relative">
      <div className="relative bg-blood-red text-white p-6 mb-8 rounded-lg">
        <h2 className="text-4xl text-center font-gothic tracking-wider">Itinerario Nocturno</h2>
        <p className="text-center mt-2 opacity-90">Atrévete a recorrer el sendero de la noche</p>

        <div className="blood-drop"></div>
        <div className="blood-drop"></div>
        <div className="blood-drop"></div>
        <div className="blood-drop"></div>
        <div className="blood-drop"></div>
      </div>

      <div className="w-full">
        <div className="grid w-full grid-cols-2 mb-6 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden opacity-50">
          <div className="flex items-center justify-center p-3 bg-gray-800 text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            Itinerario
          </div>
          <div className="flex items-center justify-center p-3 bg-gray-800 text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            Ruta del bar-hopping
          </div>
        </div>

        <Card className="bg-gray-900 border-gray-700">
          <CardContent className="p-12 text-center">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <Lock className="w-16 h-16 text-blood-red opacity-80" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blood-red rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🦇</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-blood-red font-gothic">Próximamente...</h3>
                <p className="text-gray-300 text-lg max-w-md">
                  Los secretos de la noche están por revelarse.
                </p>

                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-blood-red text-2xl font-semibold mb-3 font-gothic">Qué Esperar:</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <Wine className="w-4 h-4 mr-3 text-blood-red" />
                      <span>Pre-copeo en el depa</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-3 text-blood-red" />
                      <span>Juegos vampíricos y rituales alcohólicos</span>
                    </div>
                    <div className="flex items-center">
                      <Music className="w-4 h-4 mr-3 text-blood-red" />
                      <span>Bar-hopping por Zona Rosa</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 italic">Los detalles se revelarán más cerca de la luna de sangre...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
