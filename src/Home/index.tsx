import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../assets/hero-pic.svg'
import Carousal from './Carousal'
const index = () => {
  return (
    <section className=" flex flex-col justify-around relative">
      <div className='bg-blue-500 h-[40%] w-16'></div>
    <h1 className="text-6xl font-black leading-snug sm:text-7xl md:text-8xl sm:leading-normal md:min-[15rem] sm:text-center
    lg:text-5xl
    ">
      Get noticed by FAANG <strong className="text-blue-500">FAST</strong>
    </h1>
    <div className='flex justify-center'>
<img src={HeroImage} alt="hero-section-pic" className='sm:w-[70%] lg:w-[30%]' />
    </div>
    {/* <Carousal/> */}

    <div className='flex justify-center'>
    <div className=''>
    <h5 className="text-xl mb-4">
      FREE ATS-friendly resume in less than 2 minutes
    </h5>
    <Link to="/create-resume" className='w-full'>
    <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
      Create my FREE resume now
    </button>
    </Link>
    </div>
    </div>
  </section>
  )
}

export default index