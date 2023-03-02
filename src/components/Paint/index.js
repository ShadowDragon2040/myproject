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
} from './PaintElements'

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

const Paint = () => {
  return (
    <>
      <InfoContainer  lightBg={false} id={'Paint'} >
        <Heading lightText={false}>Festés</Heading>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1 style={{position: 'relative'}}>
                <ImgWrap>
                  <Img></Img>
                </ImgWrap>
            </Column1>
            <Column2 style={{position: 'relative'}}>
            <TopLine>Spray festés</TopLine>
                <Subtitle darkText={true}>
                Spray festéssel egyszínű egyenletes festékréteget tudunk készíteni, ajánlott a burkolati elemeknél és az otthoni díszeknél.
                </Subtitle>
            </Column2>
          </InfoRow>
          <InfoRow  imgStart={false} >
            <Column1 style={{position: 'relative'}}>
            <TopLine>Kézi festés</TopLine>
                <Subtitle darkText={true}>
                Kézi festéssel a figurákat bábúkat festjük le, az apró részleteket kiemeli és megtartja, a részletességtől fűggően eltérő árakat adunk.
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
            <TopLine>PEI nyomtatólap</TopLine>
                <Subtitle darkText={true}>
                Kíváló nyomtatási felület amely erős tapadást biztosít és egyedi mintázatot ad.
                </Subtitle>
            </Column2>
          </InfoRow>
          <InfoRow  imgStart={false} >
            <Column1 style={{position: 'relative'}}>
            <TopLine>Felbontás</TopLine>
                <Subtitle darkText={true}>
                A minimális rétegmagasság 0,1mm és a maximális rétegmagasság 0,4mm.
                </Subtitle>
            </Column1>
            <Column2 style={{position: 'relative'}}>
                <ImgWrap>
                  <Img></Img>
                </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Paint
