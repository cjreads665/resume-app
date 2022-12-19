import React from 'react'
import { Link } from 'react-router-dom'
import Carousal from './Carousal'
const index = () => {
  return (
    <section className=" flex flex-col justify-around relative">
      <div className='bg-blue-500 h-[40%] w-16'></div>
    <h1 className="text-6xl font-black leading-snug">
      Get noticed by FAANG <strong className="text-blue-500">FAST</strong>
    </h1>
<img src="src/assets/hero-pic.svg" alt="hero-section-pic" width="80%" />
    {/* <Carousal/> */}
    <h5 className="text-xl mb-4">
      FREE ATS-friendly resume in less than 2 minutes
    </h5>
    <Link to="/create-resume" className='w-full'>
    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
      Create my FREE resume now
    </button>
    </Link>
  

    <span className='text-blue-500 text-center'>Why should I use Resmerise?</span>
   
  </section>
  )
}

export default index