"use client"

import { useState } from "react"
import Header from "@/components/Header"
import EventDetails from "@/components/EventDetails"
import Map from "@/components/Map"
import Playlist from "@/components/Playlist"
import RSVP from "@/components/RSVP"
import Countdown from "@/components/Countdown"
import PageLoader from "@/components/PageLoader"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadComplete = () => {
    setIsLoading(false)
    setTimeout(() => setIsLoaded(true), 100)
  }

  if (isLoading) {
    return <PageLoader onLoadComplete={handleLoadComplete} />
  }

  return (
    <main
      className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative z-10">
        <Header />

        <div className="container mx-auto px-4 py-8 space-y-16">
          <section className="fade-in-section">
            <EventDetails />
          </section>

          <section className="fade-in-section">
            <Countdown />
          </section>

          <section className="fade-in-section">
            <Map />
          </section>

          <section className="fade-in-section">
            <Playlist />
          </section>

          <section className="fade-in-section">
            <RSVP />
          </section>
        </div>
      </div>
    </main>
  )
}
