import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../service/firebaseConfig'
import InfoSection from '../../component/InfoSection'
import Hotels from '../../component/Hotels'
import { PlacesToVisit } from '../../component/PlacesToVisit'
import Footer from '../../component/Footer'


function ViewTrip() {
    const {tripId} =useParams()

    const [trip,setTrip]=useState([])
    useEffect(()=>{
        tripId&&GetTripData()
        

    },[tripId])

    const GetTripData=async()=>{
        const docref=doc(db,'AiTrip', tripId)
        const docSnap= await getDoc(docref);
        if(docSnap.exists()){
            // console.log("Document:", docSnap.data())
            setTrip(docSnap.data())

        }else{
            console.log("DATA NOT FOUND")
        }
    }
  return (
    <div className='p-10 md:px:20 lg:px-44 xl:px-56'>
        {/* imformation section */}
    
        <InfoSection trip={trip}/>

        {/* REcomended Hotels */}
        <Hotels  trip={trip}/>

        {/* Daily plans */}
        <PlacesToVisit trip={trip.tripData}/>

        {/* Footer section */}
        <Footer trip={trip}/>

    </div>
  )
}

export default ViewTrip