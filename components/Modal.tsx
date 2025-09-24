"use client"

import React from "react"
import { createPortal } from "react-dom"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-gradient-to-br from-gray-900 to-black border border-blood-red/50 rounded-lg shadow-2xl relative
                   w-full sm:w-11/12 max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="p-6 sm:p-8">
          <h3
            id="modal-title"
            className="font-gothic text-3xl sm:text-3xl text-blood-red mb-6 text-center pr-8"
          >
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
