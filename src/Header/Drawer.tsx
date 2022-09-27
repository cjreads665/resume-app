import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { openMenu } from '../redux/menuSlice';

const Drawer = () => {
  let isOpen = useSelector((state:any)=>state.menu.isOpen)
  const dispatch = useDispatch()

  return (
    <div className={`fixed z-[10] flex p-8 flex-col text-4xl text-right bg-[#fff] transition-transform top-0 min-h-screen right-1  w-full p-4 ${isOpen? '':'-translate-x-full'}`}>
    <i onClick={()=>{
      dispatch(openMenu(true))
    }} className="fa-solid fa-xmark text-right w-full"></i>
     <div className='h-[50vh]'>
     <ul className='flex justify-around flex-col h-[15rem] w-full mt-10'>
        <li>Home</li>
        <li>About Me</li>
        <li><button className='bg-[#24292F] text-white w-full py-2.5 px-4 rounded-lg'>
        <i className="fa-brands fa-github "></i> Github
          </button></li>
      </ul>
     </div>
    </div>
  )
}

export default Drawer