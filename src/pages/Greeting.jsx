import React from 'react'
import styled from 'styled-components'
import 'animate.css';

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
  font-size: 36px;
  font-weight: 500;
  color: white;
  text-align: center;
`

const Desc = styled.p`
  font-size: 24px;
  color: white;
  font-weight: 400;
  text-align: center;
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
          <Desc >An independent Frontend Developer who loves to create projects about website.</Desc>
        </CenterItems>
      </Container>
    </>
  )
}

export default Greeting