import React, { useState } from 'react'
import ProjectsForm from './CommonForms/ProjectsForm'


const Projects = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
    <h4>You need atleast 1!</h4>
<button type="button" onClick={()=>setCount(count + 1)} 
disabled={count===5 ? true : false}
className='py-2 px-3 bg-blue-200 rounded-md' ><i className="fa-solid fa-plus"></i></button>
<button type="button" onClick={()=>setCount(count - 1)} >Click2</button>
{ [...Array(count)].map((i) => <ProjectsForm key={i} />) }
</div>
  )
}

export default Projects