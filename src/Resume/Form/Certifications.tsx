import React, { useState } from 'react'
import CertForm from './CommonForms/CertForm'

const Certifications = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h4>This section is optional</h4>
      <button type="button" onClick={()=>setCount(count + 1)} className='py-2 px-3 bg-blue-200 rounded-md' ><i className="fa-solid fa-plus"></i></button>
      <button type="button" onClick={()=>setCount(count - 1)} >Click2</button>
      { [...Array(count)].map((i) => <CertForm key={i} />) }
    </div>
  )
}

export default Certifications