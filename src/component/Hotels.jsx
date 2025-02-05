import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({trip}) {
  // console.log(trip.tripData)
  return (
    <div className=' mx-auto p-6 shadow-lg rounded-2xl border border-gray-200 mb-10'>
        <h2 className='text-xl font-bold '>Hotel Recommendation</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {trip?.tripData?.hotels?.map((hotel, index)=>(
            <Link key={index} to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+ " ,"+ hotel?.address} target='_blank'>
              <div className='hover:scale-105 transition-all mt-10' key={index}>
              <img className='rounded-xl' src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="" />
              <div className='my-2 flex flex-col gap-2'>
                <h2 className='font-medium '>{hotel.hotelName}</h2>
                <h2 className='test-xs text-gray-500'>🚩 {hotel.address}</h2>
                <h2 className='text-sm'>💸 {hotel.price}</h2>
                <h2 className='text-sm'>★ {hotel.rating}</h2>
              </div>

            </div>
            </Link>

          ))}
        </div>
    </div>
  )
}

export default Hotels