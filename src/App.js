import React from 'react'
import styled from 'styled-components'
import Sidebar from './component/Sidebar'
import Footer from './component/Footer'
import Porfolio from './component/Porfolio'
import Navbar from './component/Navbar'
import Qualification from './pages/Qualification'
import Greeting from './pages/Greeting'
import Services from './pages/Services'
import Contact from './component/contact/Contact'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
`

const Main = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-basis: 100%;
`

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Sidebar />
                <Porfolio />
                <Main>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Greeting />} />
                        <Route path="/qualification" element={<Qualification />} />
                        <Route path="/services" element={<Services />} />
                    </Routes>
                    <Contact />
                </Main>
                <Footer />
            </Container>
        </BrowserRouter>
    )
}

export default App