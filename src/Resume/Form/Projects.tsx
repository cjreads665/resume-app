import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProjectsForm from "./CommonForms/ProjectsForm";

const Projects = () => {
  const expArray = useSelector((state: any) => state.user.projects);
  const [count, setCount] = useState(0);
  const [created, setCreated] = useState(false);
  // console.log(expArray);
  useEffect(() => {
    //once the data is sent
    if (created) {
      //decrease the number of cards created by user thereby closing the card opened by the user
      // the card for the data is then managed by the mapping for data given below
      setCount(count - 1);
      //reset the created state since leaving it will make the count decrease again and again
      setCreated(false);
    }
  }, [created]);
  // console.log(count);
  console.log(expArray);
  return (
    <div>
      <h4>You need atleast 1!</h4>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        disabled={count === 5 ? true : false}
        className="py-2 px-3 bg-blue-200 rounded-md"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Click2
      </button>

      {expArray.map((obj: any, index: number) => (
        <ProjectsForm key={obj.index} details={obj} />
      ))}

      {[...Array(count)].map((el, i) => {
        if (i == count) {
          return;
        }
        return <ProjectsForm key={i} count={count} setCreated={setCreated} />;
      })}
      {/* { [...Array(count)].map((i) => <ProjectsForm key={i} />) } */}
    </div>
  );
};

export default Projects;
