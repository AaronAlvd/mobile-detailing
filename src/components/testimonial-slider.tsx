"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Natomas, Sacramento",
    rating: 5,
    text: "I was amazed at how convenient this service is! They came right to my driveway and did an excellent job on my SUV. The car looks brand new, and I didn't have to waste my weekend at a car wash.",
    image: "/cheerful-portrait.png",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "North Sacramento",
    rating: 5,
    text: "Professional, punctual, and thorough. My car hasn't looked this clean since I bought it. The fact that they come to you makes it so convenient, especially with my busy schedule.",
    image: "/cheerful-portrait.png",
  },
  {
    id: 3,
    name: "Jennifer Williams",
    location: "South Natomas",
    rating: 4,
    text: "Great service at a reasonable price. They were very careful with my car and paid attention to all the details. Will definitely use their service again!",
    image: "/thoughtful-woman-glasses.png",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "95838 Area",
    rating: 5,
    text: "I've tried several mobile car wash services, and this is by far the best. They're reliable, do excellent work, and their prices are fair. My car looks showroom-ready every time.",
    image: "/warm-smile-portrait.png",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState<typeof testimonials>([])

  useEffect(() => {
    // Determine how many testimonials to show based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 3))
      } else if (window.innerWidth >= 640) {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 2))
      } else {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 1))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const handleNext = () => {
    const maxIndex = testimonials.length - (visibleTestimonials.length || 1)
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= testimonials.length - visibleTestimonials.length}
          className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  )
}
