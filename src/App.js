import React from 'react'
import styled from 'styled-components'
import Sidebar from './component/Sidebar'
import Footer from './component/Footer'
import Porfolio from './component/Porfolio'
import Navbar from './component/Navbar'
import Contact from './component/contact/Contact'
import Qualification from './pages/Qualification'
import Greeting from './pages/Greeting'
import Services from './pages/Services'
import About from './pages/About'

import { useMediaQuery } from 'react-responsive'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const Container = styled.main`
    display: flex;
    justify-content: flex-start;
    height: 100vh;
    margin: auto;
    position: relative;
    box-sizing: border-box;
    max-width: 100vw;
`

const Main = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-basis: 100%;
`

const App = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    const isTablet = useMediaQuery({
        query: '(min-width: 768px)'
    })

    return (
        <BrowserRouter>
            <Container>
                <Sidebar />
                {isDesktopOrLaptop ? <Porfolio /> : ""}
                <Main>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Greeting />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/qualification" element={<Qualification />} />
                        <Route path="/services" element={<Services />} />
                    </Routes>
                    {isTablet ? <Contact /> : ""}
                </Main>
                <Footer />
            </Container>
        </BrowserRouter>
    )
}

export default App