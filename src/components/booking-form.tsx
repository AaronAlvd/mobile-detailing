 "use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [zipCode, setZipCode] = useState("")
  const [serviceArea, setServiceArea] = useState<"standard" | "extended" | null>(null)
  const [selectedDate, setSelectedDate] = useState("")
  const [showCalendar, setShowCalendar] = useState(false)

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setZipCode(value)

    // Check if zip code is in standard service area
    if (["95838", "95834", "95833"].includes(value)) {
      setServiceArea("standard")
    } else if (value.length === 5 && /^\d+$/.test(value)) {
      setServiceArea("extended")
    } else {
      setServiceArea(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for booking with Sacramento Mobile Wash. We'll contact you shortly to confirm your appointment.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Book Another Appointment
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            id="first-name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            id="last-name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          id="address"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            id="city"
            defaultValue="Sacramento"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
            ZIP Code
          </label>
          <input
            id="zip"
            value={zipCode}
            onChange={handleZipCodeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {serviceArea === "standard" && <p className="text-sm text-green-600">Standard service area ($30)</p>}
          {serviceArea === "extended" && <p className="text-sm text-blue-600">Extended service area ($35)</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Service Type</label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="exterior"
              name="service-type"
              value="exterior"
              defaultChecked
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="exterior" className="text-sm text-gray-700 cursor-pointer">
              Exterior Wash
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="interior"
              name="service-type"
              value="interior"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="interior" className="text-sm text-gray-700 cursor-pointer">
              Interior Cleaning
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              id="premium"
              name="service-type"
              value="premium"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor="premium" className="text-sm text-gray-700 cursor-pointer">
              Premium Package
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="vehicle-type" className="block text-sm font-medium text-gray-700">
          Vehicle Type
        </label>
        <select
          id="vehicle-type"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select vehicle type</option>
          <option value="sedan">Sedan</option>
          <option value="suv">SUV</option>
          <option value="truck">Truck</option>
          <option value="van">Van</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Preferred Date
        </label>
        <input
          type="date"
          id="date"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          min={new Date().toISOString().split("T")[0]}
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
          Preferred Time
        </label>
        <select
          id="time"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select time</option>
          <option value="morning">Morning (8am - 12pm)</option>
          <option value="afternoon">Afternoon (12pm - 4pm)</option>
          <option value="evening">Evening (4pm - 7pm)</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Special Instructions
        </label>
        <textarea
          id="notes"
          placeholder="Any special requests or instructions..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin" />
            Processing
          </>
        ) : (
          "Book Appointment"
        )}
      </button>
    </form>
  )
}
