"use client"

import React, { useState } from "react"
import Modal from "./Modal"

export default function RSVP() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    attendance: "yes",
    guests: "1",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)

      const response = await fetch(form.action, {
        method: "POST",
        body: formDataObj,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        alert(
          "¡Gracias por tu confirmación! Te hemos enviado un email de confirmación."
        )
        setShowModal(false)
        setFormData({ name: "", attendance: "yes", guests: "1" })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error sending form:", error)
      alert(
        "Hubo un error al enviar tu confirmación. Por favor intenta de nuevo."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className="text-center">
        <div className="bg-blood-red p-6 rounded-lg mb-8 inline-block blood-drip relative">
          <h3 className="font-gothic text-3xl md:text-4xl text-white">
            Únete al Aquelarre
          </h3>
          <div className="blood-drop-1"></div>
          <div className="blood-drop-2"></div>
          <div className="blood-drop-3"></div>
          <div className="blood-drop-4"></div>
          <div className="blood-drop-5"></div>
        </div>

        <p className="font-sans text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          ¿Responderás al llamado de la noche? Confirma tu asistencia y conviértete
          en parte de nuestra reunión vampírica.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="vampire-button text-xl px-12 py-4"
        >
          🩸 Confirmar Asistencia
        </button>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Confirma tu Asistencia"
      >
        <form
          onSubmit={handleSubmit}
          action="https://formsubmit.co/frianajuarezbonilla@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input
            type="hidden"
            name="_subject"
            value={`Nueva Asistencia - ${formData.name || "Invitadx"} - Fiesta Fri`}
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label className="block font-sans text-white mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full p-3 bg-black border border-white/50 rounded text-white focus:border-blood-red focus:outline-none focus:ring-2 focus:ring-blood-red/20"
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div>
            <label className="block font-sans text-white mb-2">¿Asistirás?</label>
            <select
              name="attendance"
              value={formData.attendance}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, attendance: e.target.value }))
              }
              className="w-full p-3 bg-black border border-white/50 rounded text-white focus:border-blood-red focus:outline-none focus:ring-2 focus:ring-blood-red/20"
            >
              <option value="yes">¡Sí, ahí estaré! 🥳</option>
              <option value="no">No, no puedo asistir 🥺</option>
            </select>
          </div>

          <div>
            <label className="block font-sans text-white mb-2">
              Número de invitadxs (incluyéndote)
            </label>
            <select
              name="guests"
              value={formData.guests}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, guests: e.target.value }))
              }
              className="w-full p-3 bg-black border border-white/50 rounded text-white focus:border-blood-red focus:outline-none focus:ring-2 focus:ring-blood-red/20"
            >
              {[1, 2].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="vampire-button flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar Confirmación"}
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="flex-1 px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors font-sans focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}
