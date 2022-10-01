import React, { useState } from 'react'
import Stepper from '../../Stepper/Stepper'
import StepperControl from '../../Stepper/StepperControl'
import Certifications from './Certifications';
import Education from './Education';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Skills from './Skills';
const index = () => {
  const [page,setPage] = useState(0);
  const titles = [
    'Personal Details',
    'Skills',
    'Social',
    'Experience',
    'Education',
    'Projects',
    'Ceritifications',
  ]
  const displayPage = (state:Number)=>{
    switch(state) {
      case 0:
      return <PersonalInfo/>
      case 1:
      return <Skills/>
      case 2:
      return <Experience/>
      case 3:
      return <Education/>
      case 4:
      return <Projects/>
      case 5:
      return <Certifications/>
    }
  }
  return (
    <div className="form">
      <div className="progress-bar"></div>
      <form action="">
        <div className="header my-8">
          <h2 className='text-4xl'>{titles[page]}</h2>
        </div>
        <div className="body">
          {displayPage(page)}
        </div>
        <div className="footer flex w-full justify-around">
          <button type='button'
           className={`${page<=0 ? "bg-blue-100" : "bg-blue-500 hover:bg-blue-700"} w-32 text-white font-bold py-4 px-4 rounded`}
            onClick={()=>{
              setPage((currentPage)=>currentPage-1)
            }}
            disabled={page<=0 ? true : false}
          >Prev</button>
          <button
          type='button'
          className={`${page>=titles.length-1 ? "bg-blue-100" : "bg-blue-500 hover:bg-blue-700"} w-32 text-white font-bold py-4 px-4 rounded`}
          onClick={()=>{
            setPage((currentPage)=>currentPage+1)
          }}
          disabled={page>=titles.length-1 ? true : false}
          >Next</button>
        </div>
      </form>
  
  </div>
  )
}

export default index