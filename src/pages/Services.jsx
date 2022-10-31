import React from 'react'
import styled from 'styled-components'
import { UilCheck } from '@iconscout/react-unicons'
import { useState } from 'react'

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '725px',
    laptop: '943px',
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

const ContainerServices = styled.section`
    display: flex;
    gap: 32px;
    flex-direction: column;
    @media ${devices.laptop} {
        flex-direction: row;
    }
`

const ServiceFrontend = styled.div`
    width: fit-content;
    padding: 18px;
    border: ${props => (props.selected ? '1px solid #3F403F' : '1px solid #317AC6')};
    align-self: start;
    cursor: pointer;
`

const ServiceUIUX = styled.div`
    width: fit-content;
    padding: 18px;
    border: ${props => (props.selected ? '1px solid #317AC6' : '1px solid #3F403F')};
    cursor: pointer;
`

const TitleServices = styled.h2`
    font-size: 1.25rem;
    color: white;
    font-weight: bold;
    margin-bottom: 8px;
`

const UlService = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const LiService = styled.li`
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
`

const CenterItems = styled.div`
    margin: auto;
`

const Services = () => {
    const [changeBorder, setChangeBorder] = useState(false);

    return (
        <>
            <Container>
                <CenterItems>
                    <Title>Services</Title>
                    <SubTitle>The job to those of you who are <span style={{ color: '#5F8BBB' }}>interested in me</span></SubTitle>
                    <ContainerServices>
                        <ServiceFrontend selected={changeBorder} onClick={() => setChangeBorder(false)}>
                            <TitleServices>
                                Frontend Developer
                            </TitleServices>
                            <UlService>
                                <LiService>
                                    <UilCheck style={{ color: '#63B963' }} />
                                    HTML & CSS Responsive Web Design.
                                </LiService>
                                <LiService>
                                    <UilCheck style={{ color: '#63B963' }} />
                                    React JS Development.
                                </LiService>
                                <LiService>
                                    <UilCheck style={{ color: '#63B963' }} />
                                    Node JS Development.
                                </LiService>
                                <LiService>
                                    <UilCheck style={{ color: '#63B963' }} />
                                    Javascript JS Development.
                                </LiService>
                            </UlService>
                        </ServiceFrontend>
                        <ServiceUIUX selected={changeBorder} onClick={() => setChangeBorder(true)}>
                            <TitleServices>
                                UI/UX Designer
                            </TitleServices>
                            <UlService>
                                <LiService>
                                    <UilCheck style={{ color: '#63B963' }} />
                                    Wireframing.
                                </LiService>
                                <LiService>
                                    <UilCheck style={{ color: '#63B963' }} />
                                    Product Design.
                                </LiService>
                                <LiService>
                                    <UilCheck style={{ color: '#63B963' }} />
                                    Wearables App Design.
                                </LiService>
                                <LiService>
                                    <UilCheck style={{ color: '#63B963' }} />
                                    Mobile App Design.
                                </LiService>
                                <LiService>
                                    <UilCheck style={{ color: '#63B963' }} />
                                    Corporate Branding & Graphics Design.
                                </LiService>
                            </UlService>
                        </ServiceUIUX>
                    </ContainerServices>
                </CenterItems>
            </Container>
        </>
    )
}

export default Services