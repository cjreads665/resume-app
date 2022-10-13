import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpForm from "./CommonForms/ExpForm";

const Experience = () => {
  const [count, setCount] = useState(0)
  const expArray = useSelector((state: any) => state.user.experience);
  console.log(expArray);
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
    setCount(expArray.length-1)
  },[])

  return (
    <div className="my-4">
      <h4>No experience ? You can skip this part!</h4>
      <button type="button" onClick={()=>setCount(count + 1)} className='py-2 px-3 bg-blue-200 rounded-md' ><i className="fa-solid fa-plus"></i></button>
      <button type="button" onClick={()=>setCount(count - 1)} >Click2</button>
      {expArray.map((obj:any,index:number)=><ExpForm details={obj} key={obj.index}/>)}
      { [...Array(count)].map((i) => <ExpForm key={count} count={count} />) }
    </div>
  );
};

export default Experience;
