import React from 'react'
import styled, { keyframes } from 'styled-components'
import CoverVideo from '../../CoverVideo'
import TypeWriterText from '../../TypeWriterText'
import RoundTextBlack from '../../../assets/Rounded-Text-Black.png'
import { Section, Container, Box, Round, Circle} from './index'


const Home = () => {
  return (
    <Section id='home'>
      <Container>
        <Box><TypeWriterText /></Box>
        <Box><CoverVideo /></Box>
        <Round>
        <Circle>
          &#x2193; 
        </Circle>
          <img src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
      </Section>
  )
}

export default Home