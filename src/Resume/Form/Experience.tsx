import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpForm from "./CommonForms/ExpForm";

const Experience = () => {
  //gets the array from redux
  const expArray = useSelector((state: any) => state.user.experience);

  //if there is no array in redux store, initialize it with 0
  //else if it present, reduce the count by 1 - but why? *__update on 30 Oct - removed dependancy on expArray* 
  //count controls the number of ExpForms to be created
  //it gets increased every time the add button is clicked
  const [count, setCount] = useState(0)

  //index to track the latest index to give to NEW forms
  // if there is data available, then get the length and give the length as latest index
  // if there is non data available, start the index with 0
  const [currentIndex,setCurrentIndex] = useState(expArray[0] ? expArray.length : 0)
// this index will be given to the new card and will be increased when the card is created.
console.log(currentIndex);

console.log(expArray);


  /* created state will track if the data has been sent to the redux store or not
  * once it is closed, the count will increase and we will get an extra card for no reason
  * in order to prevent that, I have decrease it here.
  * useEffect is used here to prevent too many re-rendering
   */
  const [created,setCreated] = useState(false)
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


  return (
    <div className="my-4">
      <h4>No experience ? You can skip this part!</h4>
      <div className="my-4">
      <h5 className="my-2">Please click on the tick icon to confirm your details for the card</h5>
      <h5>To edit any card after confirming, please click on edit icon, update the details and click on tick to confirm</h5>
      </div>
      <button type="button" onClick={()=>setCount(count + 1)} className='py-2 px-3 bg-blue-200 rounded-md' ><i className="fa-solid fa-plus"></i></button>
      {/* <button type="button" disabled={count!==0 ? false : true} onClick={()=>setCount(count - 1)} >Click2</button> */}
      {/** map all the existing redux data to ExpForms */}
      {expArray.map((obj:any,index:number)=><ExpForm details={obj} key={obj.index}/>)}
      {/** make an array of size = count, then loop according to the size 
       * 
       */}
      { [...Array(count)].map((el,i) => {
        if(i==count){
          return;
        }
          return <ExpForm key={i} count={currentIndex} setCurrentIndex={setCurrentIndex} setCreated={setCreated} />
      }) }
    </div>
  );
};

export default Experience;
