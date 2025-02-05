import React from 'react'
import { Link } from 'react-router-dom'

export const PlacesToVisit = ({trip}) => {

    // console.log(trip)
    if (!trip || !trip.itinerary) {
        return <p className="text-center text-gray-500">Loading trip details...</p>;
      }

   
    
  return (
    <div className=" mx-auto p-6  shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-xl font-bold">Places to visit</h2>
      
      <div className="mt-4 space-y-6">
        {Object.keys(trip.itinerary)
          .filter((day) => day.startsWith("day")).map((day, index) => (
            <div key={index}>
              <h3 className="text-xl font-medium text-gray-700 capitalize">
                Day {day.replace(/\D/g, " ")}
              </h3>
              <p className="text-lg font-bold  text-gray-600">Theme: {trip.itinerary[day].theme}</p>
              <p className="text-gray-900">Best Time to Visit: {trip.itinerary[day].bestTimeToVisit}</p>
              <div className="mt-3 space-y-4 ">
                {trip.itinerary[day].places?.map((place, idx) => (
                  <div key={idx} className="p-4 bg-gray-100 flex items-center gap-5 rounded-xl">
                    <div>
                    {place.placeImageUrl && (
                      <img
                        // src={place.placeImageUrl}
                        src={"https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"}
                        alt={place.placeName}
                        className="mt-2 w-full h-40 object-cover rounded-lg"
                      />
                    )}
                    </div>
                    <div>
                    <h4 className="text-lg font-semibold text-gray-800">{place.placeName}</h4>
                    <p className="text-gray-600">{place.placeDetails}</p>
                    <p className="text-gray-500 text-sm">Travel Time: {place.travelTime}</p>
                    <p className="text-gray-500 text-sm">Ticket Pricing: {place.ticketPricing}</p>
                    <p className="text-gray-500 text-sm">Rating: ⭐{place.rating}</p>
                    </div>

                    
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
    )
}
