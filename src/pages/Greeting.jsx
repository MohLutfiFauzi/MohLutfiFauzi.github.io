import React from 'react'
import styled from 'styled-components'
import ContainerMain from './ContainerMain'
import 'animate.css';

const Greet = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: white;
`

const Desc = styled.p`
  font-size: 24px;
  color: white;
  font-weight: 400;
`

const Tag = styled.span`
  color: #5F8BBB;
  font-weight: 300;
`

const Greeting = () => {
  return (
    <>
      <ContainerMain>
        <Greet > <Tag className='animate__animated animate__fadeInUp'> &lt;greeting&gt; </Tag > Hi, I'am Lutfi 👋<Tag className='animate__animated animate__fadeInUp'> &lt;/greeting&gt; </Tag></Greet>
        <Desc >I'm a frontend developer who works as a freelancer from Cianjur, Indonesia.</Desc>
      </ContainerMain>
    </>
  )
}

export default Greeting