import React, { Children } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addSkills } from '../../redux/userSlice';
const Skills = () => {
  let dispatch = useDispatch()
  const state = useSelector((state: any) => state.user);
  const fields = [
    {
      type: "text",
      name: "languages",
      label: "Programming Languages",
      placeholder: "Ex: Java, HTML, CSS",
    },
    {
      type: "text",
      name: "frameworks",
      label: "Frameworks",
      placeholder: "Ex: React, Springboot",
    },
    {
      type: "text",
      name: "tools",
      label: "Additional Tools",
      placeholder: "Ex: npm, git, Linux",
    },
    {
      type: "text",
      name: "softSkills",
      label: "Soft Skills",
      placeholder: "Ex: great communication, team leader",
    },
  ];
  const list = Children.toArray(fields.map((field: any) => {
    return (
      <div className="mb-6">
        <label
          htmlFor={field.name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
        >
          {field.label} {field.name==='languages'? "(separated by comma)" : ""}
        </label>
        <input
          type={field.type}
          id={field.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400"
          placeholder={field.placeholder}
          onChange={(e) => {
            dispatch(
              addSkills({
                name: field.name,
                value: e.target.value,
              })
            );
            console.log(state);
            
          }}
          required
        />
      </div>
    );
  }));
  return (
    <div>{list}</div>
  )
}

export default Skills