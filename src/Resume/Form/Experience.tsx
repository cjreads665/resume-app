import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpForm from "./CommonForms/ExpForm";

const Experience = () => {
  const expArray = useSelector((state: any) => state.user.experience);
  const [count, setCount] = useState(expArray[0] ? expArray.length-1: 0)
  const [created,setCreated] = useState(false)
  useEffect(()=>{
    if(created){
      setCount(count - 1)
  }
},[created])

  return (
    <div className="my-4">
      <h4>No experience ? You can skip this part!</h4>
      <button type="button" onClick={()=>setCount(count + 1)} className='py-2 px-3 bg-blue-200 rounded-md' ><i className="fa-solid fa-plus"></i></button>
      <button type="button" disabled={count!==0 ? false : true} onClick={()=>setCount(count - 1)} >Click2</button>
      {expArray.map((obj:any,index:number)=><ExpForm details={obj} key={obj.index}/>)}
      { [...Array(count)].map((el,i) => {
          return <ExpForm key={i} count={count} setCreated={setCreated} />
      }) }
    </div>
  );
};

export default Experience;
