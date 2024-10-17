import styled from "styled-components";
import PropTypes from 'prop-types';
import { LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import Curtain from "./Curtain";
import { FaFileDownload } from "react-icons/fa";

const StyledDiv = styled.div`
height: 100%;

`;

const Styledh1 = styled.h1`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 2rem;
  @media (max-height: 650px) {
    padding-top: 1rem;
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }
  @media (max-height: 550px) {
   font-size: 1.7rem;
  }

`

const Styledh2 = styled.h2`
  text-align: center;
  padding-top: 2rem;
  margin-bottom: 2rem;
  @media (max-height: 550px) {
     margin-bottom: 1rem;
     padding-top: 1rem;
    }
    @media (max-height: 400px) {
     margin-bottom: 0.5rem;
     padding-top: 0.5rem;
    }
`

const SvgContainer = styled.div`
display: flex;
justify-content: left;
margin: 0 auto;
width: 16rem;
margin-top: 1.5rem;
  text-shadow: 2px 2px 20px black;
  svg {
    font-size: 1.4rem;
    margin-right: 0.7rem;
  }


  @media (max-height: 650px) {
   margin-top: 1rem;
  }
  `

const SvgButton = styled.div`
display: flex;
width: 8rem;
padding: 4px 1px;
border-radius: 8px;
margin: 0 auto;
background: linear-gradient(
        rgba(12, 27, 58, 0.7),
        #3f9fd2
        );
margin-bottom: 1.5rem;
text-shadow: 2px 2px 20px black;

  &:hover {
    filter: brightness(90%);
  }
  a {
    display: flex;
    width: 100%;

  }
  svg {
    margin-left: 0.5rem;
    font-size: 1.4rem;
    margin-right: 0.7rem;
  }
  @media (max-height: 550px) {
     margin-bottom: 1rem;
    }
  `

  const PdfContainer = styled.div`
  margin-top: 3rem;
    display: flex;
    justify-content: space-evenly;
    @media (max-height: 650px) {
      margin-top: 1rem;
    }
    @media (max-height: 550px) {
     margin-top: 0.8rem;
    }
    
  `

  const PdfWrapper = styled.div`
  margin: 0 auto;
width: 50%;
    `



const ContactWrapper = ({ children}) => {
  return (
    <StyledDiv>
        <Styledh1>Get in touch</Styledh1>
        <Curtain/>
        <SvgContainer>
        <LuMail /> 
          <p>m.kikowski97@gmail.com</p>
        </SvgContainer>
        <SvgContainer>
        <BsTelephone /> 
          <p>+48 788 396 380</p>
        </SvgContainer>
 
<PdfContainer>
  <PdfWrapper>


        <Styledh2>Download CV</Styledh2>
        <SvgButton>
        <a href="/KIKOWSKI-ENGLISH-CV.pdf" download>
        <FaFileDownload />
        English
      </a>
        </SvgButton>
        <SvgButton>
        <a href="/KIKOWSKI-POLISH-CV.pdf" download>
        <FaFileDownload />
        Polish
      </a>
        </SvgButton>


  </PdfWrapper>
<PdfWrapper>
<Styledh2>View CV</Styledh2>
<SvgButton>
<a href="/KIKOWSKI-ENGLISH-CV.pdf" target="_blank" rel="noopener noreferrer">
  <FaFileDownload />
  English
  </a>
</SvgButton>
<SvgButton>
  <a href="/KIKOWSKI-POLISH-CV.pdf" target="_blank" rel="noopener noreferrer">
  <FaFileDownload />
    Polish
  </a>
</SvgButton>
  </PdfWrapper>        
</PdfContainer>

  
      {children}
    </StyledDiv>
  );
};

ContactWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContactWrapper;
