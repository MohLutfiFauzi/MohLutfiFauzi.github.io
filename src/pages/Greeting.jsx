import React from 'react'
import styled from 'styled-components'
import ContainerMain from './ContainerMain'

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

const Greeting = () => {
  return (
    <>
      <ContainerMain>
        <Greet>Hi, I'am Lutfi</Greet>
        <Desc>I'm a frontend developer who works as a freelancer from Cianjur, Indonesia.</Desc>
      </ContainerMain>
    </>
  )
}

export default Greeting