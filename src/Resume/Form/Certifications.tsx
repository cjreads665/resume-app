import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CertForm from "./CommonForms/CertForm";

const Certifications = () => {
  const expArray = useSelector((state: any) => state.user.certifications);
  const [count, setCount] = useState(0);
  const [created, setCreated] = useState(false);

  useEffect(() => {
    //once the data is sent
    if (created) {
      //decrease the number of cards created by user thereby closing the card opened by the user
      // the card for the data is then managed by the mapping for data given below that is ent by expArray(store)
      setCount(count - 1);
      //reset the created state since leaving it will make the count decrease again and again
      setCreated(false);
    }
  }, [created]);
  // console.log(count);
  console.log(expArray);
  return (
    <div>
      <h4>This section is optional</h4>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="py-2 px-3 bg-blue-200 rounded-md"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Click2
      </button>

      {/**making the form for data that already exists inside store */}
      {expArray.map((obj: any, index: number) => (
        <CertForm key={obj.index} details={obj} />
      ))}

      {/* { [...Array(count)].map((i) => <CertForm key={i} />) } */}

      {/**create an array with size count */}
      {/**this is for creating multiple forms for user to submit data */}
      {[...Array(count)].map((el, i) => {
        if (i == count) {
          return;
        }
        return <CertForm key={i} count={count} setCreated={setCreated} />;
      })}
    </div>
  );
};

export default Certifications;
