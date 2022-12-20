import React from 'react'

const SuccessMsg = (props:any) => {
    console.log(props.props);
    
  return (
    <div className="text-center flex justify-center">
    <p className={`${props.props ? "" : "hidden"} bg-blue-400`}>Thanks for using Resmerise! 😄 Please wait as we fetch your resume</p>
    </div>
  )
}

export default SuccessMsg