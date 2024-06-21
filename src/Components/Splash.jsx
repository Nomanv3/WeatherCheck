import React from 'react'
import { FaCloudSunRain } from "react-icons/fa6";
import 'animate.css';



const Splash = () => {


  return (
    <div className='w-full h-screen flex items-center justify-center bg-green-300'>
       <FaCloudSunRain className='text-8xl animate__animated animate__heartBeat animate__repeat-2 animate__fadeInLeft" animate_slow' />

    </div>
  )
}

export default Splash
