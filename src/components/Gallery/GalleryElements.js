import styled from "styled-components";

export const InfoContainer=styled.div`
    color: #fff;
    background: ${({lightBg})=>(lightBg?'#f9f9f9':'#010606')};

    @media screen and (max-width:768px) {
        padding: 100px 0;

    }
`
export const containerStyles = styled.div`
    width: "500px",
    height: "280px",
    margin: "0 auto",
`
export const dotsContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const dotsStyles = styled.div`
    margin: 0 3px;
    cursor: pointer;
    fontSize: 20px;
`
export const sliderStyles = styled.div`
    height: 100%;
    position: relative;
`
export const slideStyles = styled.div`
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
`
export const leftArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 32px;
    font-size: 32px;
    color: #fff;
    z-Index: 1;
    cursor: pointer;
`
export const rigthArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 32px;
    font-size: 32px;
    color: #fff;
    z-Index: 1;
    cursor: pointer;
`
export const InfoWrapper =styled.div`
    width: 500px;
    height: 280px;
    margin: 0 auto;
    display: grid;
    z-index: 1;
    padding:0 24px;
`

export const InfoRow=styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    
    grid-template-areas: ${({imgStart})=>(imgStart? `'col2 col1'`:`'col1 col2'`)};  
    
    @media screen and (max-width:768px) {
    grid-template-areas: ${({imgStart})=>(imgStart? `'col1' 'col2'`:`'col2 col2' 'col1 col1'`)};
    

    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    
`
export const TextWrapper=styled.div`
    max-width: 540px;
    padding-top: 0;
    
  
`
export const TopLine=styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    
`
export const Heading =styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    padding-top: 100px;
    color: #f7f8fa;
    text-align:center;
    @media screen and (max-width:480px) {
    font-size: 32px;
    }
`
export const Subtitle=styled.p`
    max-width: 440px;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 35px;
    font-weight: bold;
    text-align: justify;
    
    color: ${({darkText})=>(darkText ? '#f7f8fa' : '#fff')};
   
`
export const BtnWrap=styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap=styled.div`
    max-width: 555px;
    height: 100%;
`
export const Img =styled.img`
    
    margin: 0 0 10px 0;
    padding-right: 0;
    width:100%;
    
`
