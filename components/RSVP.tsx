"use client"

import type React from "react"

import { useState } from "react"

export default function RSVP() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    attendance: "yes",
    guests: "1",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("RSVP Data:", formData)
    alert("Thank you for your RSVP! We look forward to seeing you at the party.")
    setShowModal(false)
    setFormData({ name: "", attendance: "yes", guests: "1" })
  }

  return (
    <>
      <div className="text-center">
        <div className="bg-blood-red p-6 rounded-lg mb-8 inline-block blood-drip relative">
          <h3 className="font-gothic text-3xl md:text-4xl text-white">Join the Coven</h3>
          <div className="blood-drip-extra-1"></div>
          <div className="blood-drip-extra-2"></div>
          <div className="blood-drip-extra-3"></div>
        </div>

        <p className="font-sans text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Will you answer the call of the night? Confirm your attendance and become part of our vampire gathering.
        </p>

        <button onClick={() => setShowModal(true)} className="vampire-button text-xl px-12 py-4">
          🩸 RSVP Now
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-blood-red/30 max-w-md w-full">
            <h4 className="font-gothic text-2xl text-blood-red mb-6 text-center">Confirm Your Attendance</h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-sans text-white mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-black border border-blood-red/30 rounded text-white focus:border-blood-red focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block font-sans text-white mb-2">Will you attend?</label>
                <select
                  value={formData.attendance}
                  onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                  className="w-full p-3 bg-black border border-blood-red/30 rounded text-white focus:border-blood-red focus:outline-none"
                >
                  <option value="yes">Yes, I'll be there</option>
                  <option value="no">No, I cannot attend</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-white mb-2">Number of guests (including yourself)</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full p-3 bg-black border border-blood-red/30 rounded text-white focus:border-blood-red focus:outline-none"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-4">
                <button type="submit" className="vampire-button flex-1">
                  Submit RSVP
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors font-sans"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
