import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Ender from '../components/Ender'
import Footer from '../components/Footer'

function EnderPage(){

  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
    return(
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Ender/>
      <Footer/>
      </>
    )
}

export default EnderPage