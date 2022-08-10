import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
    background-color: #317AC6;
    position: absolute;
    bottom: 0;
    width: 100vw;
    text-align: center;
`

const Footer = () => {
    return (
        <>
            <Container>
                <h2 style={{ fontSize: '14px', color: 'white', fontWeight: '300' }}>© Lutfi. All right reserved</h2>
            </Container>
        </>
    )
}

export default Footer