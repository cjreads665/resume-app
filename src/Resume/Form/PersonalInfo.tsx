import React, { Children, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPersonalInfo } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import { PersonalInformation } from "../../Types";
const PersonalInfo = () => {
  const dispatch = useDispatch();
  const expArray = useSelector((state: any) => state.user.personalInfo);
  // console.log(expArray);
  
  const [personalInfo, setPersonalInfo] = useState<PersonalInformation>({
    name: "",
    place: "",
    email: "",
    phone: "",
    website: "",
    summary: "",
    github : "",
    linkedin : ""
  });

  useEffect(()=>{
    setPersonalInfo(expArray)
  },[expArray])

  const fields = [
    {
      type: "text",
      name: "name",
      label: "Full Name",
      placeholder: "Ex: John Doe",
    },
    {
      type: "text",
      name: "place",
      label: "City,State",
      placeholder: "Ex: Kolkata, West Bengal",
    },
    {
      type: "email",
      name: "email",
      label: "Your Email (personal account)",
      placeholder: "Ex: cool@email.com",
    },
    {
      type: "tel",
      name: "phone",
      label: "Your Phone Number with country code",
      placeholder: "Ex: +91 9632587410",
    },
    {
      type: "url",
      name: "website",
      label: "Your Personal Website",
      placeholder: "Ex: www.someawesomesite.com",
    },
    {
      type: "textarea",
      name: "summary",
      label: "Professional Summary(3 lines minimum)",
      placeholder: "Ex: Web Developer with 2 years of experience",
    },
    {
      type: "text",
      name: "github",
      label: "Github Username",
      placeholder: "Ex: coolname65",
    },
    {
      type: "text",
      name: "linkedin",
      label: "Linkedin Username",
      placeholder: "Ex: perofessional69",
    },
  ];

  const list = Children.toArray(fields.map((field: any) => {
    // console.log(field.name);
    let k = field.name
    
    return (
      <div className="mb-6 w-[100%] ">
        <label
          htmlFor={field.name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          {field.label}
        </label>
        <input
          type={field.type}
          id={field.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
          placeholder={field.placeholder}
          onChange={(e) => {
            dispatch(
              addPersonalInfo({
                name: field.name,
                value: e.target.value,
              })
            );
            // console.log(state);
          }}
          value={personalInfo[k as keyof typeof personalInfo]}
          required
        />
      </div>
    );
  }));
  return <div
  className=""
  >{list}</div>;
};

export default PersonalInfo;
