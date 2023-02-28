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
  return (
    <ServicesContainer id="services">
        <ServicesH1>Utómunkák</ServicesH1>
        <ServicesWrapper>
            <Link to={'Paint'}>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Festés</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            </Link>
            <Link to={'Elektroplating'}>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Elektroplating</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            </Link>
            <Link to={'Elektroplating'}>
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