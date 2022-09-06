import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  background-color: #1E1E1E;
  width: 100%;
  min-width: 1016px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ContainerMain = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ContainerMain