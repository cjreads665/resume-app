import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openMenu } from '../redux/menuSlice';
import Drawer from './Drawer';
const index = () => {
  const dispatch = useDispatch()
  return (
    <nav className='flex justify-between mb-6 relative'>
      <Link to='/'>
      <h5 className="text-3xl font-bold text-blue-500">
      Resmerise
    </h5>
      </Link>

    <i onClick={()=>{
      dispatch(openMenu(true))
    }} className="fa-solid fa-bars text-[2rem] ham-icon"></i>
    <Drawer/>
    </nav>
  )
}

export default index