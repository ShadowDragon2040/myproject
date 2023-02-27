import React,{useState} from 'react'
import { Button } from '../ButtonElement'

import { 
    HeroContainer,
    HeroBtnWrapped,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight
 } from './HeroElements'

const HeroSection = () => {
    const{hover,setHover}=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }

  return (
    <HeroContainer>
    <HeroContent>
        <HeroH1>3D Hobbinyomtatás</HeroH1>
        <HeroP>Képzeld el, mi megvalósítjuk!</HeroP>
        <HeroBtnWrapped>
            <Button 
            to='signup' 
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            >
                Kezd ell{hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapped>
    </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
