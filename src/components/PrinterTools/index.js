import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
Column2,
TopLine,
Heading,
ImgWrap,
Img
} from './InfoElements'

export const homeObjOne={
  id:'tools',
  lightBg:false,
  lightText:true,
  lightTextDesc:false,
  headline:'Cég bemutató',
  topLine:'Industár.kft',
  imgStart:false,
  img:require('../../images/industar-kft-front.jpg'),
  alt:'Car',
  dark:true,
  primary:true,
  darkText:true,
};

const PrinterTools = () => {
  const [LeftHovered, setLeftHovered] = useState(false);
  const [RightHovered, setRightHovered] = useState(false);

  function handleClick(event) {
  window.scrollTo({top:0});     
}

  return (
    <>
      <InfoContainer  lightBg={false} id={'tools'} >
        <Heading lightText={false}>A nyomtatóink</Heading>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1 style={{position: 'relative'}}>
            <TopLine style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              visibility: LeftHovered ? 'hidden' : 'visible',
              textAlign: 'center',
              textShadow: "4px 2px 2px black",
              zIndex: 1
            }}>Ender 3 V2</TopLine>
            <ImgWrap>
            <Link onClick={handleClick} to="/Ender">
                <Img
                  src={require('../../images/industar-kft-front.jpg')}
                  alt={'cég'}
                  onMouseEnter={() => setLeftHovered(true)}
                  onMouseLeave={() => setLeftHovered(false)}
                  style={{
                    filter: LeftHovered ? "blur(0px)" : "blur(3px)",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </ImgWrap>
            </Column1>
            <Column2 style={{position: 'relative'}}>
             <TopLine style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              visibility: RightHovered ? 'hidden' : 'visible',
              textAlign: 'center',
              textShadow: "4px 2px 2px black",
              zIndex: 1
            }}>Anycubic photon mono</TopLine>
              <ImgWrap>
              <Link onClick={handleClick} to="/Anycubic">
                <Img
                  src={require('../../images/industar-kft-front.jpg')}
                  alt={'cég'}
                  onMouseEnter={() => setRightHovered(true)}
                  onMouseLeave={() => setRightHovered(false)}
                  style={{
                    filter: RightHovered ? "blur(0px)" : "blur(3px)",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Link>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default PrinterTools
