import React from 'react'
import ContainerMain from './ContainerMain'
import styled from 'styled-components'
import LutfiJaket from '../assets/lutfi jaket.jpg'
import { UilFolderDownload } from '@iconscout/react-unicons'
import resume from '../assets/pdf/Moh Lutfi Fauzi-resume.pdf'

const Title = styled.h1`
    color: white;
    font-size: 2rem;
    font-weight: 500;
`

const SubTitle = styled.p`
    color: white;
    font-size: 1.25rem;
    font-weight: 200;
    margin-bottom: 1.5em;
`

const ContainerAbout = styled.section`
    display: flex;
    gap: 32px;
    align-items: center;
`

const ImgAbout = styled.img`
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
`

const ContainerDescAbout = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const DescParagraph = styled.p`
    color: white;
    font-size: 16px;
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

const About = () => {
    return (
        <ContainerMain>
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
        </ContainerMain>
    )
}

export default About