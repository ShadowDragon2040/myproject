import React from 'react'
import Icon1 from '../../images/svg-1.svg'
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
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Kézi Festés</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Spray Festés</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Elektroplating</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services