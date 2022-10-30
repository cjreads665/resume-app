import React, { useState } from 'react'
import EduForm from './CommonForms/EduForm'
import { useSelector } from "react-redux";

const Education = () => {
  const expArray = useSelector((state: any) => state.user.education);
  const [count, setCount] = useState(expArray[0] ? expArray.length-1: 0)
  const [created,setCreated] = useState(false)
  // console.log(expArray);
  return (
    <div>
            <h4>You need atleast 1!</h4>
      <button type="button" onClick={()=>setCount(count + 1)} className='py-2 px-3 bg-blue-200 rounded-md' ><i className="fa-solid fa-plus"></i></button>
      <button type="button" disabled={count!==0 ? false : true} onClick={()=>setCount(count - 1)} >Click2</button>
      {expArray.map((obj:any,index:number)=><EduForm details={obj} key={obj.index}/>)}
      
      {/* { [...Array(count)].map((el,i) => <EduForm key={i} />) } */}
    </div>
  )
}

export default Education