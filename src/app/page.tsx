import Link from "next/link"
import Image from "next/image"
import { Check, MapPin, Phone, Mail, Clock, Car, Droplets, Shield } from "lucide-react"
import BookingForm from "@/components/booking-form"
import ServiceAreaMap from "@/components/service-area-map"
import TestimonialSlider from "@/components/testimonial-slider"

export const metadata = {
  title: "Sacramento Mobile Car Wash | Professional Car Washing Service",
  description:
    "Professional mobile car wash service in Sacramento. We come to you for only $30 in 95838, 95834, 95833 areas. Quality service, affordable prices.",
  keywords: "mobile car wash, sacramento car wash, car detailing, car cleaning service, 95838, 95834, 95833",
  openGraph: {
    title: "Sacramento Mobile Car Wash | Professional Car Washing Service",
    description:
      "Professional mobile car wash service in Sacramento. We come to you for only $30 in 95838, 95834, 95833 areas. Quality service, affordable prices.",
    images: [{ url: "/images/car-wash-hero.jpg" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacramento Mobile Car Wash | Professional Car Washing Service",
    description:
      "Professional mobile car wash service in Sacramento. We come to you for only $30 in 95838, 95834, 95833 areas. Quality service, affordable prices.",
    images: ["/images/car-wash-hero.jpg"],
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Sacramento Mobile Wash</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="#service-area" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Service Area
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div>
            <Link
              href="#booking"
              className="hidden md:inline-flex h-10 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/soapy-car-wash.png"
              alt="Professional car wash service in Sacramento"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="container mx-auto px-4 relative z-10 py-24 md:py-32">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Mobile Car Wash <span className="text-blue-400">Delivered To You</span>
              </h1>
              <p className="mt-6 text-xl">
                Professional car washing service that comes to your location in Sacramento. Only $30 for service in
                95838, 95834, and 95833 areas.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#booking"
                  className="inline-flex h-12 px-6 items-center justify-center rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </Link>
                <Link
                  href="#service-area"
                  className="inline-flex h-12 px-6 items-center justify-center rounded-md bg-white/10 text-white border border-white/20 font-medium hover:bg-white/20 transition-colors"
                >
                  View Service Area
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Car Wash Services</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We provide comprehensive mobile car washing services that come to your location, saving you time and
                hassle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Exterior Wash</h3>
                  <p className="text-gray-500 mb-4">Complete exterior cleaning for your vehicle</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Hand wash and dry</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Wheel and tire cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Window cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Tire shine application</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Interior Cleaning</h3>
                  <p className="text-gray-500 mb-4">Thorough interior detailing services</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Vacuum seats and carpets</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Dashboard and console cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Interior window cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Door jamb cleaning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Premium Package</h3>
                  <p className="text-gray-500 mb-4">Complete interior and exterior detailing</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Full exterior wash</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Complete interior cleaning</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Wax protection</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Air freshener</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We offer competitive pricing with no hidden fees. Our pricing is based on your location.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
                <div className="text-center bg-blue-50 p-6 rounded-t-lg">
                  <h3 className="text-2xl font-semibold text-blue-700">Standard Service Area</h3>
                  <div className="text-4xl font-bold mt-4">$30</div>
                  <p className="text-blue-600 mt-2">Per service</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Service Areas:</span>
                  </div>
                  <ul className="space-y-2 pl-7">
                    <li className="list-disc">95838 - North Sacramento</li>
                    <li className="list-disc">95834 - Natomas</li>
                    <li className="list-disc">95833 - South Natomas</li>
                  </ul>
                  <Link
                    href="#booking"
                    className="block w-full mt-6 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md font-medium transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
                <div className="text-center bg-blue-50 p-6 rounded-t-lg">
                  <h3 className="text-2xl font-semibold text-blue-700">Extended Service Area</h3>
                  <div className="text-4xl font-bold mt-4">$35</div>
                  <p className="text-blue-600 mt-2">Per service</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">Service Areas:</span>
                  </div>
                  <p className="mb-4">All other Sacramento areas outside our standard service zone.</p>
                  <p className="text-sm text-gray-600">
                    *Additional fee applies for locations outside our standard service area.
                  </p>
                  <Link
                    href="#booking"
                    className="block w-full mt-6 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md font-medium transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section id="service-area" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Service Area</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We provide mobile car wash services throughout Sacramento, with special rates for 95838, 95834, and
                95833 zip codes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ServiceAreaMap />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Service Area Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Standard Service Area - $30</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>95838 - North Sacramento</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>95834 - Natomas</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span>95833 - South Natomas</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Extended Service Area - $35</h4>
                    <p>We service all other areas in Sacramento County for a small additional fee.</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Not sure if you're in our service area? Contact us to confirm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our mobile car
                wash service.
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Book Your Mobile Car Wash</h2>
                <p className="text-lg mb-6">
                  Schedule your car wash service today. We'll come to your location in Sacramento and provide a
                  professional cleaning service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Convenient Scheduling</h3>
                      <p className="text-gray-600">Book a time that works for you. We're available 7 days a week.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">We Come To You</h3>
                      <p className="text-gray-600">No need to drive anywhere. We bring our service to your location.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Satisfaction Guaranteed</h3>
                      <p className="text-gray-600">If you're not happy with our service, we'll make it right.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">Schedule Your Car Wash</h3>
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about our mobile car wash service? Get in touch with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-lg font-medium">(916) 555-1234</p>
                <p className="text-gray-600 mt-2">Available 7 days a week, 8am-7pm</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-lg font-medium">info@sacmobilewash.com</p>
                <p className="text-gray-600 mt-2">We'll respond within 24 hours</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Service Area</h3>
                <p className="text-lg font-medium">Sacramento, CA</p>
                <p className="text-gray-600 mt-2">Serving 95838, 95834, 95833 and surrounding areas</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Sacramento Mobile Wash</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Professional mobile car wash service in Sacramento. We come to you for only $30 in 95838, 95834, 95833
                areas.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#service-area" className="text-gray-400 hover:text-white transition-colors">
                    Service Area
                  </Link>
                </li>
                <li>
                  <Link href="#booking" className="text-gray-400 hover:text-white transition-colors">
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-400">(916) 555-1234</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-400">info@sacmobilewash.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-400">Sacramento, CA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sacramento Mobile Wash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
