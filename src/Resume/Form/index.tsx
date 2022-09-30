import React from 'react'
import Stepper from '../../Stepper/Stepper'
import StepperControl from '../../Stepper/StepperControl'
const index = () => {
  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
    {/* Stepper */}
    <div className="horizontal container mt-5 ">
        <Stepper/>
    </div>
    {/**navigation control */}
    <StepperControl/>
  </div>
  )
}

export default index