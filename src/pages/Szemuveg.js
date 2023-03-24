import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Anycubic from '../components/Anycubic';
import Footer from '../components/Footer'

function SzemuvegPage(){

  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  
    return(
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Anycubic/>
      <Footer/>
      </>
    )
}

export default SzemuvegPage