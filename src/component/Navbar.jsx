import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navigasi = styled.nav`
    background-color: #252526;
`

const Container = styled.ul`
    list-style: none;
    display: flex;
    gap: 1px;
`

const Item = styled.li`
`

let styleLink = {
    height: '44px',
    minWidth: '130px',
    padding: '0 16px',
    color: '#747776',
    backgroundColor: '#2D2D2C',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
}

let activeStyle = {
    height: '44px',
    minWidth: '130px',
    padding: '0 16px',
    color: '#FFFFFF',
    backgroundColor: '#1E1E1E',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
}

const Navbar = () => {
    return (
        <>
            <Navigasi>
                <Container>
                    <Item>
                        <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : styleLink}>
                            <img align="left" alt="JavaScript" title="JavaScript" width="18px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
                            Main.js
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to='/about' style={({ isActive }) => isActive ? activeStyle : styleLink}>
                            <img align="left" alt="JavaScript" title="JavaScript" width="18px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
                            About.js
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to='/services' style={({ isActive }) => isActive ? activeStyle : styleLink}>
                            <img align="left" alt="JavaScript" title="JavaScript" width="18px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
                            Services.js
                        </NavLink>
                    </Item>
                    <Item>
                        <NavLink to='/qualification' style={({ isActive }) => isActive ? activeStyle : styleLink}>
                            <img align="left" alt="JavaScript" title="JavaScript" width="18px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" />
                            Qualification.js
                        </NavLink>
                    </Item>
                </Container>
            </Navigasi>
        </>
    )
}

export default Navbar