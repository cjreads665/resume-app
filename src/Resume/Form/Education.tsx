import React, { useState } from 'react'
import EduForm from './CommonForms/EduForm'

const Education = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
            <h4>You need atleast 1!</h4>
      <button type="button" onClick={()=>setCount(count + 1)} className='py-2 px-3 bg-blue-200 rounded-md' ><i className="fa-solid fa-plus"></i></button>
      <button type="button" onClick={()=>setCount(count - 1)} >Click2</button>
      { [...Array(count)].map((i) => <EduForm key={i} />) }
    </div>
  )
}

export default Education