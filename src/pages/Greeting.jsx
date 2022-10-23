import React from 'react'
import styled from 'styled-components'
import 'animate.css';

const flCon = {
  size: 2, // in vw
  max: 36, // in px
  min: 24 // in px
};

const flCon2 = {
  size: 2, // in vw
  max: 24, // in px
  min: 14 // in px
};

const calcMinBreak = (size, min) => Math.round((min * 100) / size);
const calcMaxBreak = (size, max) => Math.round((max * 100) / size);

const Container = styled.main`
  padding: 1rem;
  background-color: #1E1E1E;
  flex-basis: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 16px;
    border-left: 1px solid #333333;
    border-top: 1px solid #333333;
  }
  &::-webkit-scrollbar-thumb {
    visibility: hidden;
    background: #424342;
    transition: visibility 3s;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #676767; 
   }

  &:hover {
    &::-webkit-scrollbar-thumb {
        visibility: visible; 
    } 
  }
`

const Greet = styled.h1`
  font-size: ${flCon.size}vw;
  font-weight: 500;
  color: white;
  text-align: center;

  @media (max-width: ${calcMinBreak(flCon.size, flCon.min)}px) {
    font-size: ${flCon.min}px;
  }

  @media (min-width: ${calcMaxBreak(flCon.size, flCon.max)}px) {
    font-size: ${flCon.max}px;
  }
`

const Desc = styled.p`
  font-size: ${flCon2.size}vw;
  color: white;
  font-weight: 400;
  text-align: center;

  @media (max-width: ${calcMinBreak(flCon2.size, flCon2.min)}px) {
    font-size: ${flCon2.min}px;
  }

  @media (min-width: ${calcMaxBreak(flCon2.size, flCon2.max)}px) {
    font-size: ${flCon2.max}px;
  }
`

const Tag = styled.span`
  color: #5F8BBB;
  font-weight: 300;
`

const CenterItems = styled.div`
    margin: auto;
`

const Greeting = () => {
  return (
    <>
      <Container>
        <CenterItems >
          <Greet > <Tag className='animate__animated animate__fadeInUp'> &lt;greeting&gt; </Tag > Hi, I'am Lutfi 👋<Tag className='animate__animated animate__fadeInUp'> &lt;/greeting&gt; </Tag></Greet>
          <Desc >I'm a frontend developer who works as a freelancer from Cianjur, Indonesia.</Desc>
        </CenterItems>
      </Container>
    </>
  )
}

export default Greeting