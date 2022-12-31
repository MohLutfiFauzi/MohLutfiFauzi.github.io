import React from 'react'
import styled from 'styled-components'
import LutfiJaket from '../assets/lutfi jaket.jpg'
import { UilFolderDownload } from '@iconscout/react-unicons'
import resume from '../assets/pdf/Moh Lutfi Fauzi-resume.pdf'

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '830px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
};

const Container = styled.main`
  padding: 1rem 1rem 2rem 1rem;
  background-color: #1E1E1E;
  width: 100%;
  flex-basis: 100%;
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

const Title = styled.h1`
    color: white;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
`

const SubTitle = styled.p`
    color: white;
    font-size: 1.25rem;
    font-weight: 200;
    margin-bottom: 1.5em;
    text-align: center;
`

const ContainerAbout = styled.section`
    display: flex;
    gap: 32px;
    align-items: center;
    flex-direction: column;

    @media ${devices.laptop} {
        flex-direction: row;
    }
`

const ImgAbout = styled.img`
    min-width: 200px;
    width: 100%;
    max-width: 300px;
    object-fit: cover;
    border-radius: 8px;
`

const ContainerDescAbout = styled.div`
    width: fit-content;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: left;
    align-items: flex-start;
`

const DescParagraph = styled.p`
    color: white;
    font-size: 1rem;
`

const ButtonCV = styled.a`
    width: 164px;
    height: 54px;
    background-color: #485EFF;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    &:hover{
        background-color: blueviolet;
    }
    color: white;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-decoration: none;
`

const CenterItems = styled.div`
    margin: auto;
`

const About = () => {
    return (
        <Container>
            <CenterItems >
                <Title>About me</Title>
                <SubTitle>My Introduction</SubTitle>
                <ContainerAbout>
                    <ImgAbout src={LutfiJaket} alt="lutfi pake jaket" />
                    <ContainerDescAbout>
                        <DescParagraph>
                            Web developer, with extensive knowledge and years of experience, working in web technologies and UI / UX design, delivering quality work &#128175;
                        </DescParagraph>
                        <ButtonCV href={resume} download>
                            Download CV <UilFolderDownload />
                        </ButtonCV>
                    </ContainerDescAbout>
                </ContainerAbout>
            </CenterItems>
        </Container>
    )
}

export default About