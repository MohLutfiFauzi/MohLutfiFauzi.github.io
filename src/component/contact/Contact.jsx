import React from 'react'
import styled from 'styled-components'
import ContainerContact from './ContainerContact'

const Item = styled.p`
    color: #E0E2E3;
    font-size: 12px;
    font-weight: 500;
    word-spacing: 1px;
    letter-spacing: 0.3px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Contact = () => {
    return (
        <>
            <ContainerContact>
                <Item style={{ color: '#63B963', marginBottom: '12px' }}>Compiled successfully!</Item>
                <Item style={{ marginBottom: '12px' }}>You can now contact me.</Item>
                <Item> <span style={{ margin: '0 31px 0 20px' }}>Callme : </span> +62 895-8036-21717</Item>
                <Item> <span style={{ margin: '0 40px 0 20px' }}>Email : </span> mohlutfifauzii@gmail.com</Item>
                <Item> <span style={{ margin: '0 22px 0 20px' }}>Location :</span> Cianjur - West Java - Indonesia</Item>
                <Item style={{ marginTop: '12px' }}>Note to contact me only for business purposes.</Item>
            </ContainerContact>
        </>
    )
}

export default Contact