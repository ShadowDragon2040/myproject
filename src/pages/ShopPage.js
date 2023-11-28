import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import SlideShow from '../components/SlideShow';

function ShopPage(){

  const[isOpen,setIsOpen]=useState(false)

  const toggle=()=>{
    setIsOpen(!isOpen)
  }
    return(
      <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>

      <SlideShow/>

      <Footer/>
      </>
    )
}

export default ShopPage