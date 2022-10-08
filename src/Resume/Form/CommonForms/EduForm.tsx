import React, { useState } from 'react'

const EduForm = () => {
      const [details,setDetails] = useState({
    schoolName : '',
    degree : '',
    year : 0,
    gpa : "0",
    isComplete : false
  })

  return (
    <div className={` mt-4 border border-gray-300 bg-gray-50 p-4 rounded-lg mb-2`}>
    <div className={` ${details.isComplete ? "pointer-events-none" : "pointer-events-auto"} flex flex-col justify-around `}>
      <label htmlFor="schoolName">School/College</label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="Ex :Delhi University, Delhi"
        value={details.schoolName}
        onChange={(e)=>{
          setDetails((prevState:any)=>({
            ...prevState,
            compName : e.target.value
          }))
        }}
      ></input>
      <label htmlFor="degree">Major/Degree</label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="Ex : Bachelors in Technology"
        onChange={(e)=>{
          setDetails((prevState:any)=>({
            ...prevState,
            degree : e.target.value
          }))
        }}
      />
   <label htmlFor="graduationYear">Graduation Year</label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="Ex : 2020"
        onChange={(e)=>{
          setDetails((prevState:any)=>({
            ...prevState,
            year : e.target.value
          }))
        }}
      />
        <label htmlFor="gpa">GPA</label>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="Ex : 3.9/5.0"
        onChange={(e)=>{
          setDetails((prevState:any)=>({
            ...prevState,
            gpa : e.target.value
          }))
        }}
      />
 </div>
 <div className='flex w-full justify-evenly'>
 <button type='submit'
 onClick={(e)=>{
  e.preventDefault()
  setDetails((prevState:any)=>({
    ...prevState,
    isComplete : false
  }))
}}
 className='px-4 py-1.5 mt-4 bg-blue-400 '><i className="fa-solid fa-pen-to-square"></i>
 </button>
 <button type='button'
 onClick={(e)=>{
  e.preventDefault()
  if(details.schoolName.length==0 || details.year==0 || details.degree.length==0 || details.gpa=='' ){
    alert("please fill all the fields before proceeding!")
    return
  }
  setDetails((prevState:any)=>({
    ...prevState,
    isComplete : true
  }))
}}
 className='px-4 py-1.5 mt-4 bg-green-400 '><i className="fa-solid fa-check"></i></button>

 </div>
    </div>
  )
}

export default EduForm