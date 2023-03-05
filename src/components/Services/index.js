import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import { Link } from 'react-router-dom';
import { 
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
 } from './ServicesElements'

const Services = () => {

  function handleClick(event) {
    window.scrollTo({top:0});     
  }

  return (
    <ServicesContainer id="services">
        <ServicesH1>Utómunkák</ServicesH1>
        <ServicesWrapper>
            <Link onClick={handleClick} to={'PaintPage'}>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Festés</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            </Link>
            <Link onClick={handleClick} to={'ElektroplatingPage'}>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Elektroplating</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            </Link>
            <Link onClick={handleClick} to={'ElektroplatingPage'}>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Elektroplating</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            </Link>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services