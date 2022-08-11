import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex-basis: 40%;
    background-color: #1E1E1E;
    border-top: 1px solid #3F403F;
    padding: 8px 14px;
`

const Top = styled.ul`
    list-style: none;
    display: flex;
    gap: 14px;
`

const TopItem = styled.li`
`

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 8px;
`

// let styleLink = {
//     fontSize: '11px',
//     color: '#828585',
//     paddingBottom: '5px',
//     textDecoration: 'none'
// }

let activeStyle = {
    fontSize: '11px',
    color: '#E0E2E3',
    borderBottom: '1px solid #E0E2E3',
    paddingBottom: '5px',
    textDecoration: 'none'
}

const ContainerContact = ({ children }) => {
    return (
        <>
            <Container>
                <Top>
                    <TopItem style={activeStyle}>
                        CONTACT
                    </TopItem>
                </Top>
                <Bottom>
                    {children}
                </Bottom>
            </Container>
        </>
    )
}

export default ContainerContact