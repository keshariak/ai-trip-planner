import React, { useEffect } from 'react'
import { GetPlaceDetails } from '../service/GlobalApi'

function InfoSection({trip}) {
  useEffect(()=>{
    trip&&GetPlacePhoto()
  },[trip])
  const GetPlacePhoto = async()=>{
    const data={
      textQuery:trip?.userSelection?.location

    }
    const result =await GetPlaceDetails(data).then(res=>{
      console.log(res)
    })
  }
    // console.log(trip)
  return (
    <div>
        <img className=' shadow-lg h-[300px] w-full object-cover rounded-xl' src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="" />
        <div className='my-5 flex flex-col gap-2'>
            <h2 className='font-bold text-2xl m-4 mx-0'> 🔴Location: {trip?.userSelection?.location}</h2>
            <div className='flex gap-5 text-lg'>
                <h2 className='p-1 px-3 bg-stone-200 rounded-full font-semibold text-gray-600'>📆 {trip?.userSelection?.days} Days</h2>
                <h2 className='p-1 px-3 bg-stone-200 rounded-full font-semibold text-gray-600'>💰 {trip?.userSelection?.budget}</h2>
                <h2 className='p-1 px-3 bg-stone-200 rounded-full font-semibold text-gray-600'>🍾 {trip?.userSelection?.traveler}</h2>
            </div>
        </div>
    </div>
  )
}

export default InfoSection