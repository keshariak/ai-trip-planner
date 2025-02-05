import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {

  const [user,setUser]=useState(null)


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.name); // Set user's name in state
    } else {
      console.log("Please log in.");
    }
  }, []); // Runs only once when the component mounts
  return (
    <div className='w-full h-15 border-b-1 border-b-gray-500 flex justify-between'>
        <div className="left flex items-center pl-14">
          
          <h1 className='font-bold text-xl'>TripGenie</h1>
          
            

        </div>
        <div className="right flex items-center pr-12">
        {user ? (
          <h1 className="font-bold text-xl">Hi, {user}!</h1>
        ) : (
          <button className="bg-gray-900 px-2 py-1 rounded-xl font-mono text-white">
            Sign In
          </button>
        )}
           

        </div>
        


    </div>
  )
}

export default Header