import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { AI_PROMPT, selectBudgetOption, SelectTravelesList } from '../contants/options';

import { ToastContainer, toast } from 'react-toastify';
import { chatSession } from '../service/AiModel';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../service/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function CreateTrip() {

  const  navigate= useNavigate()
    const [place, setPlace]= useState('')
    const [openDailog, setOpenDialog]=useState(false)
    const [userDetails, setUserDetails] = useState(null);
    const [loding, setLoading]=useState(false)

    const [formData, setformData]= useState([]);
    const handleinputchange=(name, value)=>{

        setformData({
            ...formData,[name]:value
        })
    }
    useEffect(()=>{

    },[formData])

    const login=useGoogleLogin({
        onSuccess:(res)=>GetUserDetail(res.access_token),
        onError:(er)=>console.log(er)
    })

    const OnGenerateTrip=async ()=>{
        

        const user=localStorage.getItem('user');
        if(!user){
            setOpenDialog(true)
            return
        }
        if(formData?.days>10&& !formData?.location ||!formData?.days||!formData?.budget|| !formData?.traveler){
            return  toast.error("Fill the Deatils!", {
                position: "top-left",
              });
        }
        setLoading(true)
        const FINAL_PROMPT= AI_PROMPT
        .replace('{location}',formData?.location)
        .replace('{days}',formData?.days)
        .replace('{traveler}',formData?.traveler)
        .replace('{budget}',formData?.budget)
        .replace('{totaldays}',formData?.days)
        console.log(FINAL_PROMPT)
        const result = await chatSession.sendMessage(FINAL_PROMPT)
        // console.log(result?.response?.candidates[0].content.parts[0].text)
        setLoading(false)
        SaveTripInFirebase(result?.response?.text())
        
    }

    const SaveTripInFirebase=async (Tripdata)=>{
        setLoading(true)

        const user= JSON.parse(localStorage.getItem('user')) 

        const docId= Date.now().toString()
        await setDoc(doc(db, "AiTrip", docId), {
        userSelection:formData,
        tripData:JSON.parse(Tripdata),
        userEmail:user?.email,
        id:docId


  })
  setLoading(false)
  navigate('/view-trip/'+docId)
    }

    const GetUserDetail = async (accessToken) => {
        try {
          const response = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log("User Details:", response.data);
          localStorage.setItem('user', JSON.stringify(response.data))
        //   setUserDetails(response.data); 
        setOpenDialog(false)
        OnGenerateTrip()
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };
  return (
    <div className='p-10 w-full  flex items-center justify-center'>

        <div className='md:w-2/3'>
        <h2 className='text-3xl font-bold pb-3'>Tell us your trip plan 🌴🏕️</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolorem, explicabo, ullam pariatur aut molestiae vitae sunt quasi numquam accusamus ab!</p>
        
        <div className='mt-10'>
            <h3 className='font-semibold mb-3'>What id destination to choice?</h3>
            <input value={formData.location} onChange={(e)=>handleinputchange('location',e.target.value)} className='px-2 py-1 border-2 w-full' type="text" />
        </div>

        <div className='mt-10'>
            <h3 className='font-semibold mb-3'>How many days are you planning your trip?</h3>
            < input value={formData.days} onChange={(e)=>handleinputchange('days',e.target.value)} placeholder='Ex. 3'className='px-2 py-1 border-2 w-full' type="number" />
        </div>

        <div className='mt-10'>
        <h3 className='font-semibold'>What is Your Budget?</h3>
        <p className='text-xs'>The budget is exclusively allocated for activities and dining purpose.</p>
        <div className='grid grid-cols-3 gap-5 mt-5 cursor-pointer'>

            {selectBudgetOption.map((item, index)=>(
                <div key={index}
                onClick={()=>handleinputchange('budget', item.title)}
                className={`p-4 border-1 border-gray-400 rounded-md hover:shadow-lg ${formData.budget==item.title && 'shadow-lg border-gray-950'}`}> 
                <h2 className='font-bold text-2xl'>{item.icon}</h2>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
                
            ))}

        </div>

        </div>

        <div className='mt-10'>
        <h3 className='font-semibold'>What do you plan on traveling with on your next adventure?</h3>
        <p className='text-xs'>The budget is exclusively allocated for activities and dining purpose.</p>
        <div className='grid grid-cols-3 gap-5 mt-5 cursor-pointer'>
            {SelectTravelesList.map((item, index)=>(
                <div key={index} 
                onClick={()=>handleinputchange('traveler', item.people)}
                className={`p-4 border border-gray-400 rounded-lg hover:shadow-lg ${formData.traveler== item.people && 'shadow-lg border-gray-950'}`}> 
                <h2 className='font-bold text-2xl'>{item.icon}</h2>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
                
            ))}

        </div>

        </div>
        

        <div className='w-full flex justify-center items-center mt-20'>
            <button disabled={loding} onClick={OnGenerateTrip} className='bg-black text-white px-3 py-2 rounded-lg hover:shadow-xl'>
                
                {loding==false?(
                    <p>Generate Trip</p>
                    

                ):(
                    <p>Loading...</p>

                )}
                </button>
            <ToastContainer />
        </div>

        </div>


           {/* Conditional rendering of dialog */}
      {openDailog ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <p className="mb-6">Please log in to continue.</p>

            {/* Google Login Button */}
            <button
              className="flex items-center justify-center w-full px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-red-600"
             onClick={login}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>

            <button
              className="px-4 py-2  text-black rounded font-bold text-2xl items-center hover:text-red-700 "
              onClick={() => setOpenDialog(false)}
            >
              x
            </button>
          </div>
        </div>
      ) : null}
        
      
    </div>
  )
}

export default CreateTrip