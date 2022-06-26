import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  min-height: ${props => `calc(100vh - ${props.theme.navHeight}px)` };
  width: 100vw;
  position: relative;
  background-color: ${props => props.theme.body};
`

const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    &>*:first-child{
      width: 100%;
      margin-top: 2rem;
    }
  }

`

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Mint = () => {
  return (
    <Section>
        <Container>
        <Title>Mint Your Weirdos</Title>
        </Container>
    </Section>
  )
}

export default Mint