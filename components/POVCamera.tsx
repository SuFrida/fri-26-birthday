"use client"

import { Camera, Clock } from "lucide-react"
import { useState, useEffect } from "react"

interface POVCameraProps {
  unlockTime?: Date // Optional: defaults to event start time
  cameraUrl?: string // Optional: camera link URL
}

export default function POVCamera({
  unlockTime = new Date("2025-10-25T18:00:00"), // Default: October 25, 2024 at 6:00 PM
  cameraUrl = "https://pov.camera/qr/A48E96AD-913E-46BE-A43B-89D6C808BF0A",
}: POVCameraProps) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState("")

  useEffect(() => {
    const checkTime = () => {
      const now = new Date()
      const diff = unlockTime.getTime() - now.getTime()

      if (diff <= 0) {
        setIsUnlocked(true)
        setTimeRemaining("")
      } else {
        setIsUnlocked(false)

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        if (days > 0) {
          setTimeRemaining(`${days}d ${hours}h ${minutes}m`)
        } else if (hours > 0) {
          setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`)
        } else if (minutes > 0) {
          setTimeRemaining(`${minutes}m ${seconds}s`)
        } else {
          setTimeRemaining(`${seconds}s`)
        }
      }
    }

    checkTime()
    const interval = setInterval(checkTime, 1000)

    return () => clearInterval(interval)
  }, [unlockTime])

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-blood-red/20 shadow-2xl">
      <div className="bg-blood-red p-6 rounded-lg mb-8 blood-drip relative">
        <h3 className="font-gothic text-3xl md:text-4xl text-white text-center">Cámara POV</h3>
        <div className="blood-drop-1"></div>
        <div className="blood-drop-2"></div>
        <div className="blood-drop-3"></div>
        <div className="blood-drop-4"></div>
        <div className="blood-drop-5"></div>
      </div>

      <div className="text-center space-y-6">
        <div className="flex justify-center mb-4">
          <Camera className="w-16 h-16 text-blood-red" />
        </div>

        <p className="font-sans text-gray-300 text-lg">
          Captura los momentos más oscuros de la noche con esta cámara POV desde tu cel.
          ¡No necesitas descargar nada!
        </p>

        <div className="bg-black/50 p-6 rounded-lg border border-blood-red/30">
          <p className="font-sans text-white mb-2 text-xl font-semibold">15 Fotos Únicas</p>
          <p className="font-sans text-gray-400 text-sm">Una sola oportunidad por foto. Haz que cada disparo cuente.</p>
        </div>

        {!isUnlocked && (
          <div className="bg-blood-red/20 p-4 rounded-lg border border-blood-red/40">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blood-red" />
              <p className="font-sans text-white font-semibold">Cámara Bloqueada</p>
            </div>
            <p className="font-sans text-gray-300 text-sm">
              Se desbloqueará en: <span className="text-blood-red font-bold">{timeRemaining}</span>
            </p>
          </div>
        )}

        <button
          disabled={!isUnlocked}
          onClick={() => {
            if (isUnlocked && cameraUrl !== "https://pov.camera/qr/A48E96AD-913E-46BE-A43B-89D6C808BF0A") {
              window.open(cameraUrl, "_blank", "noopener,noreferrer")
            }
          }}
          className={`vampire-button inline-block ${!isUnlocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          📸 {isUnlocked ? "Abrir Cámara POV" : "Cámara No Disponible"}
        </button>

        <p className="font-sans text-gray-500 text-sm italic">
          {isUnlocked ? "El enlace está activo durante el evento" : "La cámara se activará al inicio del evento"}
        </p>
      </div>
    </div>
  )
}
