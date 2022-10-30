import React, { useEffect, useState } from 'react'
import EduForm from './CommonForms/EduForm'
import { useSelector } from "react-redux";

const Education = () => {
  const expArray = useSelector((state: any) => state.user.education);
  const [count, setCount] = useState(0)
  const [created,setCreated] = useState(false)
  // console.log(expArray);
  useEffect(()=>{
    //once the data is sent
    if(created){
      //decrease the number of cards created by user thereby closing the card opened by the user
      // the card for the data is then managed by the mapping for data given below
      setCount(count - 1)
      //reset the created state since leaving it will make the count decrease again and again
      setCreated(false)
  }
},[created])
console.log(count);
console.log(expArray);
  return (
    <div>
            <h4>You need atleast 1!</h4>
      <button type="button" onClick={()=>setCount(count + 1)} className='py-2 px-3 bg-blue-200 rounded-md' ><i className="fa-solid fa-plus"></i></button>
      <button type="button" disabled={count!==0 ? false : true} onClick={()=>setCount(count - 1)} >Click2</button>
      {expArray.map((obj:any,index:number)=><EduForm details={obj} key={obj.index}/>)}
      
      {/* { [...Array(count)].map((el,i) => <EduForm key={i} />) } */}
            {/** make an array of size = count, then loop according to the size 
       * 
       */}
      { [...Array(count)].map((el,i) => {
        if(i==count){
          return;
        }
          return <EduForm key={i} count={count} setCreated={setCreated} />
      }) }
    </div>
  )
}

export default Education