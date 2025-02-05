import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className=' w-full mt-20 md:mt-0 flex md:flex-row flex-col gap-5 pt-0 justify-center  '>

       <div className=' px-10 md:w-1/2 w-full flex md:flex-rev flex-col justify-center items-center text-center'>
       <h2 className='text-orange-700 text-5xl font-bold pb-3'>Discover Your Next Adventure Trip With AI:</h2>
       <h2 className='text-5xl font-bold'>Personalized Itineraries at Your Fingertips</h2>
       <p className='w-2/3 items-center justify-center text-center pt-16'>
       Embark on your dream journey with our ultimate trip planner—explore breathtaking destinations, customize itineraries, book flights, find top-rated hotels, discover local attractions, and create unforgettable memories with ease.
       </p>
       <Link to={'/create-trip'}>
       <button className='bg-black text-white p-2 px-4 mt-20 text-xl rounded-xl'>Get Started, it's Free </button>
       </Link>
      
       </div>
       <div className='md:w-1/2 w-full md:h-full  flex items-center justify-center '>
        <img className='w-[90%] rounded-4xl h-[80%]' src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
       
    </div>
  )
}

export default Hero