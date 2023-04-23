import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ModellTervezes from '../components/ModellTervezes/index'
import Footer from '../components/Footer'

function ModellTervezesPage(){

  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
    return(
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <ModellTervezes/>
      <Footer/>
      </>
    )
}

export default ModellTervezesPage