"use client"

import { useEffect, useState } from "react"

interface PageLoaderProps {
  onLoadComplete: () => void
}

export default function PageLoader({ onLoadComplete }: PageLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [bats, setBats] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const batArray = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: 20 + i * 25,
      y: 45 + Math.random() * 10,
      delay: i * 0.3,
    }))
    setBats(batArray)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onLoadComplete, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onLoadComplete])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8 h-20">
          {bats.map((bat) => (
            <div
              key={bat.id}
              className="absolute"
              style={{
                left: `${bat.x}%`,
                top: `${bat.y}%`,
                animationDelay: `${bat.delay}s`,
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDuration: "1.5s" }}
              >
                <span className="text-2xl text-white">🦇</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blood-red px-8 py-4 rounded-lg mb-6 inline-block">
          <h2 className="font-gothic text-2xl md:text-3xl text-white tracking-wider">Estás invitadx al despertar de la noche...</h2>
        </div>

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-blood-red transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <p className="font-sans text-white/60 mt-4 text-sm">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}
