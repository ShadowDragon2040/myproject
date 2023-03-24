import React from 'react'
import { Link } from 'react-router-dom';
import {
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
Column2,
Column3,
Column4,
TextWrapper,
TopLine,
Heading,
Subtitle,
ImgWrap,
Img
} from './InfoElements'

export const homeObjOne={
  id:'products',
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
const Products = () => {

  function handleClick(event) {
    window.scrollTo({top:0});     
  }

  return (
    <>
      <InfoContainer  lightBg={false} id={'products'} >
        <Heading lightText={false}>Termékeink</Heading>
        <InfoWrapper>
          <InfoRow  imgStart={false} >
            <Column1>
            <TextWrapper> 
             <TopLine>Szemüvegek</TopLine>
              <Link onClick={handleClick} to="/Szemuveg">
                <ImgWrap>
                  <Img src={require('../../images/industar-kft-front.jpg')} alt={'cég'}/>
                </ImgWrap>
              </Link>
              <Subtitle darkText={true}>
                A 3D nyomtatással előálított szemüvegeink teljesen testreszabhatóak, különböző anyagok, színek és stílusokban elérhetőek.
              </Subtitle>
            </TextWrapper>
            </Column1>

            <Column2>
            <TextWrapper> 
             <TopLine>Figurák</TopLine>
              <Link onClick={handleClick} to="/Figura">
                <ImgWrap>
                  <Img src={require('../../images/industar-kft-front.jpg')} alt={'cég'}/>
                </ImgWrap>
              </Link>
              <Subtitle darkText={true}>
                A választékból vannak kis figurák asztali játékokhoz vagy nagyobb figurák asztali dísznek vagy polci dísznek.
              </Subtitle>
            </TextWrapper>
            </Column2>

            <Column3>
            <TextWrapper> 
             <TopLine>Otthoni díszek</TopLine>
              <Link onClick={handleClick} to="/Otthoni_disz">
                <ImgWrap>
                  <Img src={require('../../images/industar-kft-front.jpg')} alt={'cég'}/>
                </ImgWrap>
              </Link>
              <Subtitle darkText={true}>
                Asztali díszek, fali díszek vagy mutatós polcra rakható díszek hogy érdekesebb legyen az otthoni légkör.
              </Subtitle>
            </TextWrapper>
            </Column3>

            <Column4>
            <TextWrapper> 
             <TopLine>Alkatrészek</TopLine>
              <Link onClick={handleClick} to="/Alkatresz">
                <ImgWrap>
                  <Img src={require('../../images/industar-kft-front.jpg')} alt={'cég'}/>
                </ImgWrap>
              </Link>
              <Subtitle darkText={true}>
                Kissebb alkatrészek, fedőlapok, álványok elkészítésére, szerkezetek elfedésére is alkalmas a 3D nyomtatás.
              </Subtitle>
            </TextWrapper>
            </Column4>
            
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Products
