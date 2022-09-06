import React from 'react'
import styled from 'styled-components'
import Diploma from '../assets/education.png';
import { UilCalendarAlt } from '@iconscout/react-unicons'

const Container = styled.main`
  background-color: #1E1E1E;
  width: 100%;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 0 128px;
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
    font-size: 32px;
    font-weight: 500;
    color: white;
`

const SubTitle = styled.p`
    font-size: 1.25rem;
    font-weight: 200;
    color: white;
`

const SubParagraph = styled.p`
    font-size: 1rem;
    font-weight: 200;
    color: white;
`

const Top = styled.section`
    display: flex;
    gap: 24px;
    border-bottom: 1px solid #E0E2E3;
    min-width: 647px;
    padding: 32px 0;
`

const DescTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Center = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
`

const SubSubTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    color: white;
    margin-top: 24px;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 10px;
`

const LI = styled.li`
    color: white;
    margin-left: 40px;
`

const Anchor = styled.a`
    text-decoration: none;
    color: #5F8BBB;
    cursor: pointer;
    font-weight: 300;
`

const DateGraduation = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 5px;
`

const Th = styled.td`
    border-bottom: 1px solid #E0E2E3;
    padding: 16px 0;
    text-align: left;
    color: white;
    border-collapse: collapse;
`

const Td = styled.td`
    border-bottom: 1px solid #333333;
    padding: 16px 0;
    color: white;
    border-collapse: collapse;
`

const Qualification = () => {
    return (
        <>
            <Container>
                <Top>
                    <img src={Diploma} alt="Icon Diploma" />
                    <DescTop>
                        <Title>Qualification</Title>
                        <SubTitle>Frontend Developer  |  UI / UX Designer </SubTitle>
                        <SubParagraph>My personal journey</SubParagraph>
                    </DescTop>
                </Top>
                <Center>
                    <SubSubTitle>
                        Education ?
                    </SubSubTitle>
                    <Ul>
                        <LI>
                            Studying at <Anchor href='https://ft.unsur.ac.id/' target='_blank'>Suryakancana University</Anchor> majoring in Informatics Engineering. <br />
                            <DateGraduation>
                                <UilCalendarAlt /> 2018 - 2022
                            </DateGraduation>
                        </LI>
                        <LI>
                            Learn Web Development at <Anchor href='https://www.dicoding.com/' target='_blank'>Dicoding Indonesia.</Anchor><br />
                            <DateGraduation>
                                <UilCalendarAlt /> 2021 - 2022
                            </DateGraduation>
                        </LI>
                        <LI>
                            Learn Web Design at  <Anchor href='https://buildwithangga.com/ab-lp-1' target='_blank'>Buildwithangga.</Anchor><br />
                            <DateGraduation>
                                <UilCalendarAlt /> 2021 - 2021
                            </DateGraduation>
                        </LI>
                        <LI>
                            Learn Master in UI / UX at  <Anchor href='https://buildwithangga.com/ab-lp-1' target='_blank'>Buildwithangga.</Anchor><br />
                            <DateGraduation>
                                <UilCalendarAlt /> 2021 - 2021
                            </DateGraduation>
                        </LI>
                    </Ul>
                    <SubSubTitle>Work ?</SubSubTitle>
                    <Ul>
                        <LI>
                            As a Frontend Developer, I haven't worked yet
                        </LI>
                        <LI>
                            As a UI / UX, I haven't worked yet
                        </LI>
                    </Ul>
                    <SubSubTitle>Certificate ?</SubSubTitle>
                    <tabel>
                        <tr>
                            <Th style={{ width: "25em" }}>Skills</Th>
                            <Th style={{ width: "25em" }}>From</Th>
                        </tr>
                        <tr>
                            <Td><Anchor href='https://www.dicoding.com/certificates/MRZMD51G0ZYQ' target='_blank'>Menjadi Front-End Web Developer Expert.</Anchor></Td>
                            <Td>Dicoding Indonesia.</Td>
                        </tr>
                        <tr>
                            <Td><Anchor href='https://www.dicoding.com/certificates/6RPND619RZ2M' target='_blank'>Belajar Membuat Aplikasi Web dengan React.</Anchor></Td>
                            <Td>Dicoding Indonesia.</Td>
                        </tr>
                        <tr>
                            <Td><Anchor href='https://www.dicoding.com/certificates/KEXL3V5QYPG2' target='_blank'>Belajar Prinsip Pemrograman SOLID.</Anchor></Td>
                            <Td>Dicoding Indonesia.</Td>
                        </tr>
                        <tr>
                            <Td><Anchor href='https://www.dicoding.com/certificates/KEXL35YL4PG2' target='_blank'>Belajar Membuat Aplikasi Back-End untuk Pemula.</Anchor></Td>
                            <Td>Dicoding Indonesia.</Td>
                        </tr>
                        <tr>
                            <Td><Anchor href='https://drive.google.com/file/d/1zUd0c3TBySKxofZXGyqIAi777s5KNDtx/view' target='_blank'>Peserta Terbaik SIB (Studi Independen Bersertifikat).</Anchor></Td>
                            <Td>Dicoding Indonesia.</Td>
                        </tr>
                        <tr>
                            <Td><Anchor href='https://drive.google.com/file/d/1oBXeTU-_u65m4ryooGDsmE32cMtvPQcV/view?usp=sharing' target='_blank'>MERN (MongoDB ExpressJS ReactJS NodeJS) Stack.</Anchor></Td>
                            <Td>Buildwithangga.</Td>
                        </tr>
                    </tabel>
                </Center>
            </Container>
        </>
    )
}

export default Qualification