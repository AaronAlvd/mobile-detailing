"use client"

import { useEffect, useRef } from "react"

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for a real map implementation
    // In a real application, you would use a mapping library like Google Maps, Mapbox, or Leaflet
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    if (!mapRef.current || !ctx) return

    const container = mapRef.current
    canvas.width = container.clientWidth
    canvas.height = 400
    container.appendChild(canvas)

    // Draw a simple placeholder map
    ctx.fillStyle = "#e5e7eb"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw Sacramento area outline
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.2, canvas.height * 0.2)
    ctx.lineTo(canvas.width * 0.8, canvas.height * 0.2)
    ctx.lineTo(canvas.width * 0.8, canvas.height * 0.8)
    ctx.lineTo(canvas.width * 0.2, canvas.height * 0.8)
    ctx.closePath()
    ctx.strokeStyle = "#6b7280"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw standard service area
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.3, canvas.height * 0.3)
    ctx.lineTo(canvas.width * 0.7, canvas.height * 0.3)
    ctx.lineTo(canvas.width * 0.7, canvas.height * 0.6)
    ctx.lineTo(canvas.width * 0.3, canvas.height * 0.6)
    ctx.closePath()
    ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
    ctx.fill()
    ctx.strokeStyle = "#3b82f6"
    ctx.stroke()

    // Add labels
    ctx.font = "bold 16px Arial"
    ctx.fillStyle = "#1e3a8a"
    ctx.fillText("Sacramento", canvas.width * 0.5 - 50, canvas.height * 0.15)

    ctx.font = "14px Arial"
    ctx.fillStyle = "#3b82f6"
    ctx.fillText("95838", canvas.width * 0.4, canvas.height * 0.4)
    ctx.fillText("95834", canvas.width * 0.5, canvas.height * 0.5)
    ctx.fillText("95833", canvas.width * 0.6, canvas.height * 0.4)

    // Add legend
    ctx.fillStyle = "rgba(59, 130, 246, 0.2)"
    ctx.fillRect(canvas.width * 0.1, canvas.height * 0.85, 20, 20)
    ctx.strokeStyle = "#3b82f6"
    ctx.strokeRect(canvas.width * 0.1, canvas.height * 0.85, 20, 20)

    ctx.font = "12px Arial"
    ctx.fillStyle = "#000"
    ctx.fillText("Standard Service Area ($30)", canvas.width * 0.1 + 30, canvas.height * 0.87)

    return () => {
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div ref={mapRef} className="w-full h-[400px] bg-gray-100 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-500">Interactive map loading...</p>
      </div>
    </div>
  )
}
