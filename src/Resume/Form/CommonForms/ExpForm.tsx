import React, { useEffect, useState } from 'react'

function capitalizeFirstLetter(string:string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function getKeyByValue(object:any, value:string) {
  return Object.keys(object).find(key => object[key] === value);
}

const ExpForm = (props:any) => {
  let index = props.count +1
  
  const [details,setDetails] = useState({
    compName : '',
    role : '',
    startDate : [],
    endDate : [],
    jobDesc : '',
    isComplete : false
  })
 
  console.log(details);
  // console.log(props);
  var months: any = {
    1: "january",
    2: "february",
    3: "march",
    4: "april",
    5: "may",
    6: "june",
    7: "july",
    8: "august",
    9: "september",
    10: "october",
    11: "november",
    12: "december",
  };

 useEffect(()=>{
  if(!index){
    setDetails(props.details)
  }
 },[5])
  
  
  return (
    <div className={` mt-4 border border-gray-300 bg-gray-50 p-4 py-8 rounded-lg`}>
      <div className={` ${details.isComplete ? "pointer-events-none" : "pointer-events-auto"} `}>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Facebook Inc."
          value={details.compName}
          onChange={(e)=>{
            setDetails((prevState:any)=>({
              ...prevState,
              compName : e.target.value
            }))
          }}
        ></input>
        <label htmlFor="role">Role</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Ex : Web Developer"
          value={details.role}
          onChange={(e)=>{
            setDetails((prevState:any)=>({
              ...prevState,
              role : e.target.value
            }))
          }}
        />
        <div className="flex border border-3">
          <div className="flex flex-col">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className='border border-black p-2 rounded-md w-1/2'
              value={`${details.startDate[1]}-${getKeyByValue(months,details.startDate[0])}-${details.startDate[2]}`}
              onChange={(e) => {
                let date = e.target.value;
                console.log(date);
                let startDay = date.split("-")[2]
                let startMonth = capitalizeFirstLetter(months[date.split("-")[1]]); //month
                let startYear = date.split("-")[0]; //year
                setDetails((prevState:any)=>({
                  ...prevState,
                  startDate : [startMonth,startYear]
                }))
                
              }}
            ></input>
          </div>
          <div className="flex flex-col justify-between">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className='border border-black p-2 rounded-md w-1/2'
              value={`${details.endDate[1]}-${getKeyByValue(months,details.endDate[0])}-${details.endDate[2]}`}
              onChange={(e) => {
                let date = e.target.value;
                let endDay = date.split("-")[2]
                let endMonth = capitalizeFirstLetter(months[date.split("-")[1].split("")[1]]); //month
                let endYear = date.split("-")[0]; //year
                setDetails((prevState:any)=>({
                  ...prevState,
                  endDate : [endMonth,endYear]
                }))
              }}
            ></input>
          </div>
        </div>
        <label htmlFor="description">Job Description(minimum 3 sentences)</label>
   <textarea name="description" id="description" rows={4} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
   placeholder="Ex: Created and managed react components."
   value={details.jobDesc}
   onChange={(e)=>{
    setDetails((prevState:any)=>({
      ...prevState,
      jobDesc : e.target.value
    }))
  }}
   ></textarea>
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
    if(details.endDate.length==0 || details.startDate.length==0 || details.jobDesc.length<4 || details.compName.length<2 || details.role.length==0 ){
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

export default ExpForm