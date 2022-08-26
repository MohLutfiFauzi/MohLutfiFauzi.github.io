import React from 'react'
import styled from 'styled-components'
import { UilEllipsisH, UilImageV } from '@iconscout/react-unicons'
import { dataPortfolio } from '../dataPortfolio'
import { useState } from 'react'

const Container = styled.div`
    min-width: 300px;
    min-height: 100vh;
    background-color: #252526;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 0 16px;
`

const Center = styled.div`
    width: 100%;
    padding: 16px;
`

const Input = styled.input`
    width: 100%;
    background-color: #3C3C3C;
    border: none;
    height: 25px;
    padding-left: 4px;
    color: #B4B4B4;
    &::placeholder {
        color: #919591;
    }
    &:focus {
        outline: 1px solid #317AC6;
    }
`

const Project = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: #37373D;
    }
`

const Icon = styled.div`
    margin: 6px 10px;
`

const ProjectDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 14px;
    gap: 1px;
`

const EmptyMessage = styled.p`
    color: #B4B4B4;
    font-size: 14px;
    margin-left: 14px;
`

const Porfolio = () => {
    const [inputSearch, setInputSearch] = useState('');
    const portfolios = dataPortfolio.filter(element => element.name.toLowerCase().includes(inputSearch.toLowerCase())).map((data) => data);

    return (
        <>
            <Container>
                <Top>
                    <h2 style={{ fontSize: '12px', fontWeight: '300', color: '#B4B4B4' }}>PORTFOLIO</h2>
                    <UilEllipsisH color='#C9C9C9' size='20' style={{ cursor: 'pointer' }} />
                </Top>
                <Center>
                    <Input placeholder='Search Portfolio' onChange={e => setInputSearch(e.target.value)} />
                </Center>
                {portfolios.length > 0 ?
                    portfolios.map(({ name, link, desc, madeBy }, index) => (
                        <a href={link} key={index} target='_blank' style={{ textDecoration: 'none' }} rel="noreferrer">
                            <Project>
                                <Icon>
                                    <UilImageV color='#C9C9C9' size='50' />
                                </Icon>
                                <ProjectDesc>
                                    <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#BFBFBF' }}>{name}</h2>
                                    <p style={{ fontSize: '14px', fontWeight: '300', color: '#B4B4B4' }}>{desc}</p>
                                    <h2 style={{ fontSize: '12px', fontWeight: '500', color: '#B4B4B4' }}>{madeBy}</h2>
                                </ProjectDesc>
                            </Project>
                        </a>
                    )) : <EmptyMessage>No portfolio found.</EmptyMessage>
                }
            </Container>
        </>
    )
}

export default Porfolio