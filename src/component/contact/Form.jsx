import React from 'react'
import styled from 'styled-components'
import ContainerContact from './ContainerContact'

const Item = styled.p`
    color: #E0E2E3;
    font-size: 12px;
    font-weight: 500;
    word-spacing: 1px;
    letter-spacing: 0.3px;
`

const Form = () => {
    return (
        <>
            <ContainerContact>
                <Item style={{ color: '#63B963', marginBottom: '12px' }}>Form</Item>
            </ContainerContact>
        </>
    )
}

export default Form