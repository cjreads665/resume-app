import React from 'react'
import Why from './Why'
const index = () => {
  return (
    <section className=" flex flex-col justify-around">
    <h1 className="text-6xl font-black leading-snug">
      Get noticed by FAANG <strong className="text-blue-500">FAST</strong>
    </h1>
<img src="src\assets\hero-pic.svg" alt="hero-section-pic" width="80%" />
    <h5 className="text-xl mb-4">
      FREE ATS-friendly resume in less than 2 minutes
    </h5>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
      Create my FREE resume now
    </button>

    <span className='text-blue-500 text-center'>Why should I use Resmerise?</span>

  </section>
  )
}

export default index