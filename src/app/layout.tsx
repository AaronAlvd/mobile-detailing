import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sacramento Mobile Car Wash | Professional Car Washing Service",
  description:
    "Professional mobile car wash service in Sacramento. We come to you for only $30 in 95838, 95834, 95833 areas. Quality service, affordable prices.",
  keywords: "mobile car wash, sacramento car wash, car detailing, car cleaning service, 95838, 95834, 95833",
  metadataBase: new URL("https://sacmobilewash.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sacmobilewash.com",
    title: "Sacramento Mobile Car Wash | Professional Car Washing Service",
    description:
      "Professional mobile car wash service in Sacramento. We come to you for only $30 in 95838, 95834, 95833 areas. Quality service, affordable prices.",
    siteName: "Sacramento Mobile Car Wash",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sacramento Mobile Car Wash",
              image: "https://sacmobilewash.com/images/car-wash-hero.jpg",
              url: "https://sacmobilewash.com",
              telephone: "(916) 555-1234",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sacramento",
                addressRegion: "CA",
                postalCode: "95838",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.6026,
                longitude: -121.4522,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "08:00",
                closes: "19:00",
              },
              priceRange: "$30-$35",
              servesCuisine: "Car Wash Services",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
