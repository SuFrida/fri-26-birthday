"use client"

import { useState, useEffect } from "react"

export default function Playlist() {
  const [isEventDay, setIsEventDay] = useState(false)

  useEffect(() => {
    const eventDate = new Date("2025-10-25")
    const today = new Date()
    setIsEventDay(today.toDateString() === eventDate.toDateString())
  }, [])

  return (
    <div className="bg-gradient-to-br p-8 rounded-lg border border-blood-red/20 shadow-2xl">
      <div className="bg-blood-red p-6 rounded-lg mb-8 blood-drip relative">
        <h3 className="font-gothic text-3xl md:text-4xl text-white text-center">Soundtrack de la noche</h3>
        <div className="blood-drip-extra-1"></div>
        <div className="blood-drip-extra-2"></div>
        <div className="blood-drip-extra-3"></div>
      </div>

      <div className="text-center">
        {isEventDay ? (
          <div className="space-y-4">
            <p className="font-sans text-gray-300 mb-6">¡Ya puedes agregar música a la playlist! Agrega tus canciones vampíricas favoritas.</p>
            <a
              href="https://open.spotify.com/playlist/your-playlist-id"
              target="_blank"
              rel="noopener noreferrer"
              className="vampire-button inline-block"
            >
              🎵 Abrir Playlist Colaborativa
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="font-sans text-gray-300 mb-6">
              ¡La playlist colaborativa estará disponible el día del evento!
            </p>
            <div className="vampire-button-disabled inline-block">🎵 Playlist Colaborativa Pronto...</div>
          </div>
        )}
      </div>
    </div>
  )
}
