import React from 'react'
import styled from 'styled-components'
import { UilGithub, UilInstagram, UilFacebookF, UilLinkedin, UilDribbble, UilTwitter } from '@iconscout/react-unicons'

const Container = styled.aside`
    min-width: 50px;
    min-height: 100vh;
    background-color: #333;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 8px;
    gap: 16px;
`

const Sidebar = () => {
    return (
        <>
            <Container>
                <a target='_blank' href='https://github.com/MohLutfiFauzi' rel="noreferrer"><UilGithub size="30" color="#ABADAD" /></a>
                <a target='_blank' href='https://facebook.com/MohLutfiFauzi' rel="noreferrer"><UilFacebookF size="30" color="#ABADAD" /></a>
                <a target='_blank' href='https://instagram.com/mohlutfifauzi' rel="noreferrer"><UilInstagram size="30" color="#ABADAD" /></a>
                <a target='_blank' href='https://dribbble.com/MohLutfiFauzi' rel="noreferrer"><UilDribbble size="30" color="#ABADAD" /></a>
                <a target='_blank' href='https://twitter.com/MohLutfiFauzi' rel="noreferrer"><UilTwitter size="30" color="#ABADAD" /></a>
                <a target='_blank' href='https://www.linkedin.com/in/mohlutfifauzi/' rel="noreferrer"><UilLinkedin size="30" color="#ABADAD" /></a>
            </Container>
        </>
    )
}

export default Sidebar