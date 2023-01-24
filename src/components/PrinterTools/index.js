import React from 'react'
import {Button} from '../ButtonElement'
import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
Column2,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
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
  
  return (
    <>
    
      <InfoContainer  lightBg={false} id={'tools'} >
        <Heading lightText={false}>A nyomtatóink</Heading>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
            <TopLine>Ender 3 V2</TopLine>
            <ImgWrap>
              <Img src={require('../../images/industar-kft-front.jpg')} alt={'cég'}/>
            </ImgWrap>
              <BtnWrap>
                <Button to='company'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                /* primary={primary? 1:0}
                dark={dark ? 1:0} 
                 dark2={dark2 ? 1:0} */
                dark={true}
                primary={true}
                darkText={true}
                >Bövebben</Button>
              </BtnWrap>
            </Column1>
             <Column2>
             <TopLine>Anycubic photon mono</TopLine>
              <ImgWrap>
              <Img src={require('../../images/industar-kft-front.jpg')} alt={'cég'}/>
              </ImgWrap>
              <BtnWrap>
                <Button to='company'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                /* primary={primary? 1:0}
                dark={dark ? 1:0} 
                 dark2={dark2 ? 1:0} */
                dark={true}
                primary={true}
                darkText={true}
                >Bövebben</Button>
              </BtnWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default PrinterTools
