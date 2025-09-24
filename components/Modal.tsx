"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement

      // Focus the first focusable element when modal opens
      const firstFocusable = modalRef.current?.querySelector(
        'input, select, button, textarea, [tabindex]:not([tabindex="-1"])',
      ) as HTMLElement
      firstFocusable?.focus()

      // Prevent body scroll
      document.body.style.overflow = "hidden"

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose()
        }
      }

      const handleTabTrap = (e: KeyboardEvent) => {
        if (e.key === "Tab" && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'input, select, button, textarea, [tabindex]:not([tabindex="-1"])',
          )
          const firstElement = focusableElements[0] as HTMLElement
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }

      document.addEventListener("keydown", handleEscape)
      document.addEventListener("keydown", handleTabTrap)

      return () => {
        document.body.style.overflow = "unset"
        document.removeEventListener("keydown", handleEscape)
        document.removeEventListener("keydown", handleTabTrap)

        if (triggerRef.current) {
          triggerRef.current.focus()
        }
      }
    }
  }, [isOpen, onClose])

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
        ref={modalRef}
        className="bg-gradient-to-br from-gray-900 to-black border border-blood-red/30 rounded-lg shadow-2xl relative
                   w-full h-full sm:w-11/12 sm:h-auto sm:max-w-2xl sm:max-h-[90vh] overflow-y-auto"
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
          <h3 id="modal-title" className="font-gothic text-3xl sm:text-3xl text-blood-red mb-6 text-center pr-8">
            {title}
          </h3>

          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}
