import { useDispatch, useSelector } from "react-redux";
import { addPersonalInfo } from "../../redux/userSlice";
import React, { useState } from "react";
import Stepper from "../../Stepper/Stepper";
import StepperControl from "../../Stepper/StepperControl";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";
import Skills from "./Skills";
import axios from "axios";
import SuccessMsg from "../SuccessMsg";

const index = () => {
  const api = {
    dev: "http://localhost:8080",
    live: "https://resume-back.onrender.com",
  };

  const data = useSelector((state: any) => state.user);
  console.log(data);
  const [showMsg, setShowMsg] = useState(false);
  const [page, setPage] = useState(0);
  const titles = [
    "Personal Details",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    "Ceritifications",
  ];
  const displayPage = (state: Number) => {
    switch (state) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <Skills />;
      case 2:
        return <Experience />;
      case 3:
        return <Education />;
      case 4:
        return <Projects />;
      case 5:
        return <Certifications />;
    }
  };
  return (
    <div className="form">
      <div className="progress-bar"></div>
      <form action="">
        <div className="header my-8">
          <h2 className="text-4xl sm:text-center sm:text-5xl">
            {titles[page]}
          </h2>
        </div>
        <SuccessMsg props={showMsg} />
        <div className="body sm:px-8 md:px-32 lg:px-48">
          {displayPage(page)}
        </div>
        <div className="footer flex w-full justify-around">
          <button
            type="button"
            className={`${
              page <= 0 ? "bg-blue-100" : "bg-blue-500 hover:bg-blue-700"
            } w-32 text-white font-bold py-4 px-4 rounded`}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
            disabled={page <= 0 ? true : false}
          >
            Prev
          </button>
          <button
            type="button"
            className={`${
              page >= titles.length - 1
                ? "bg-blue-100"
                : "bg-blue-500 hover:bg-blue-700"
            } w-32 text-white font-bold py-4 px-4 rounded`}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
              console.log(titles[page]);
            }}
            disabled={page >= titles.length - 1 ? true : false}
          >
            Next
          </button>
        </div>
        <div className="w-full flex flex-row justify-center my-4">
          <button
            className={`${
              titles[page] === "Ceritifications" ? "" : "hidden"
            } w-32 bg-green-300 font-bold py-4 px-4 rounded`}
            onClick={(e) => {
              e.preventDefault();
              axios.post(`${api.dev}/data`, {
                data,
              })
              setTimeout(() => {
              axios
                .get(`${api.dev}/download`, {
                  responseType: "arraybuffer",
                })
                .then((res) => {
                  //creating a url for the blob data
                  const url = window.URL.createObjectURL(
                    new Blob([res.data])
                  );
                  //creating a link element
                  const link = document.createElement("a");
                  //giving the url of the file to link
                  link.href = url;
                  link.setAttribute("download", "file.pdf");
                  document.body.appendChild(link);
                  //automatically clicking the link
                  link.click();
                });
              }, 3000);
              setShowMsg(true);
              setTimeout(() => {
                setShowMsg(false);
              }, 30000);
            }}
          >
            Submit
          </button>
        </div>
      </form>
      <SuccessMsg props={showMsg} />
    </div>
  );
};

export default index;
