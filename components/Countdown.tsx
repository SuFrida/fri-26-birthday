"use client"

import { useState, useEffect } from "react"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    días: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-10-25T18:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          días: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center">
      <div className="bg-blood-red p-6 rounded-lg mb-8 inline-block blood-drip relative">
        <h3 className="font-gothic text-3xl md:text-4xl text-white tracking-wider">Tiempo Hasta que Caiga la Noche</h3>
        <div className="blood-drip-extra-1"></div>
        <div className="blood-drip-extra-2"></div>
        <div className="blood-drip-extra-3"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="from-gray-900 to-black p-6 rounded-lg border border-blood-red/30">
            <div className="font-gothic text-3xl md:text-4xl font-bold text-white">
              {value.toString().padStart(2, "0")}
            </div>
            <div className="font-sans text-sm uppercase tracking-wide text-white/80 mt-2">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
