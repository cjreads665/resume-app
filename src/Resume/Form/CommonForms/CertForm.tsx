import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCertificate, updateCertificate } from "../../../redux/userSlice";

const CertForm = (props: any) => {
  let index = props.count; //checking if the index is present. This will tell us whether the data sent
  //is by store or user
  let dispatch = useDispatch();

  const [details, setDetails] = useState({
    name: "",
    year: "",
    isComplete: false,
    index: 0,
  });

  useEffect(() => {
    if (!index) {
      // if the count property is not present in props i.e. the data is already present
      //set the existing details as data to be used
      setDetails(props.details);
    }
  });
  return (
    <div
      className={` mt-4 border border-gray-300 bg-gray-50 p-4 rounded-lg mb-2`}
    >
      <div
        className={` ${
          details.isComplete ? "pointer-events-none" : "pointer-events-auto"
        } flex flex-col justify-around `}
      >
        <label htmlFor="projName">Certificate</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Ex : Data Structures And Algorithms"
          value={details.name}
          onChange={(e) => {
            setDetails((prevState: any) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
        ></input>
        <label htmlFor="year">Received in (Year)</label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
          placeholder="Ex : 2021"
          value={details.year}
          onChange={(e) => {
            setDetails((prevState: any) => ({
              ...prevState,
              year: e.target.value,
            }));
          }}
        />
      </div>
      <div className="flex w-full justify-evenly">
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setDetails((prevState: any) => ({
              ...prevState,
              isComplete: false,
            }));
          }}
          className="px-4 py-1.5 mt-4 bg-blue-400 "
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (details.name.length == 0 || details.year == "") {
              alert("please fill all the fields before proceeding!");
              return;
            }
            setDetails((prevState: any) => ({
              ...prevState,
              isComplete: true,
            }));
            if(!index){
              dispatch(
                updateCertificate({
                  index : details.index,
                  details : details
                })
              );
            }
            else{
              dispatch(
                addCertificate({
                  details : details
                })
              )
            props.setCreated(true)      
            }
          }}
          className="px-4 py-1.5 mt-4 bg-green-400 "
        >
          <i className="fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default CertForm;
