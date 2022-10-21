import React from 'react'
import { AnimatePresence } from 'framer-motion';
import Navbar2 from '../Components/Navbar2';
import MainContainer from '../Components/MainContainer';
const Userdashboard = () => {
  return (
    <>
      <AnimatePresence> 
        <div className="w-screen h-auto flex flex-col"> 
          <Navbar2 /> 
          <main className='mt-16 md:mt-24 md:px-16 px-4 py-4 w-full'>
            <MainContainer/>
          </main>
        </div>
      </AnimatePresence>
    </>
  )
}

export default Userdashboard;