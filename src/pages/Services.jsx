import React from 'react'
import ContainerMain from './ContainerMain'
import styled from 'styled-components'
import { UilCheck } from '@iconscout/react-unicons'
import { useState } from 'react'

const Title = styled.h1`
    color: white;
    font-size: 2.25rem;
    font-weight: bold;
`

const SubTitle = styled.p`
    color: white;
    font-size: 1.25rem;
    font-weight: 200;
    margin-bottom: 1.5em;
`

const ContainerServices = styled.section`
    display: flex;
    gap: 32px;
`

const ServiceFrontend = styled.div`
    width: 400px;
    padding: 18px;
    border: ${props => (props.selected ? '1px solid #3F403F' : '1px solid #317AC6')};
    align-self: start;
    cursor: pointer;
`

const ServiceUIUX = styled.div`
    width: 400px;
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

const Services = () => {
    const [changeBorder, setChangeBorder] = useState(false);

    return (
        <>
            <ContainerMain>
                <Title>Services</Title>
                <SubTitle>The job to those of you who are <span style={{ color: '#317AC6' }}>interested in me</span></SubTitle>
                <ContainerServices>
                    <ServiceFrontend selected={changeBorder} onClick={() => setChangeBorder(false)}>
                        <TitleServices>
                            Frontend Developer
                        </TitleServices>
                        <UlService>
                            <LiService>
                                <UilCheck style={{ color: '#63B963' }} />
                                I develop user interface.
                            </LiService>
                            <LiService>
                                <UilCheck style={{ color: '#63B963' }} />
                                Web page development.
                            </LiService>
                            <LiService>
                                <UilCheck style={{ color: '#63B963' }} />
                                I create ux element interactions.
                            </LiService>
                            <LiService>
                                <UilCheck style={{ color: '#63B963' }} />
                                I position your company brand.
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
            </ContainerMain>
        </>
    )
}

export default Services