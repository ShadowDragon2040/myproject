import React from 'react'
import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
Column2,
Heading,
ImgWrap,
TopLine,
Img,
Subtitle
} from './AnycubicElements'

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

const Anycubic = () => {
  return (
    <>
      <InfoContainer  lightBg={false} id={'tools'} >
        <Heading lightText={false}>Anycubic Photon Mono</Heading>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1 style={{position: 'relative'}}>
                <ImgWrap>
                    <Img></Img>
                </ImgWrap>
            </Column1>
            <Column2 style={{position: 'relative'}}>
            <TopLine>Technológia</TopLine>
                <Subtitle darkText={true}>
                Az Anycubic Photon Mono egy SLA 3D nyomtató, amely UV fény hatására megkötő műgyantával nyomtat.
                </Subtitle>
            </Column2>
          </InfoRow>
          <InfoRow  imgStart={false} >
            <Column1 style={{position: 'relative'}}>
            <TopLine>Méretek</TopLine>
                <Subtitle darkText={true}>
                A belső maximum nyomtatható méret: 13cm x 8cm x 16,5cm.
                </Subtitle>
            </Column1>
            <Column2 style={{position: 'relative'}}>
                <ImgWrap>
                    <Img></Img>
                </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow  imgStart={false} >
            <Column1 style={{position: 'relative'}}>
                <ImgWrap>
                    <Img></Img>
                </ImgWrap>
            </Column1>
            <Column2 style={{position: 'relative'}}>
            <TopLine>Felbontás</TopLine>
                <Subtitle darkText={true}>
                A minimális rétegmagasság 0,01mm és az LCD képernyő 2k részletességű.
                </Subtitle>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Anycubic
