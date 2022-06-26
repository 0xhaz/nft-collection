import React from 'react'
import styled from 'styled-components'

import { Section, Item, ImageContainer, Name, Position, Title, Container} from './index'

import img1 from '../../../assets/Nfts/bighead.svg';
import img2 from '../../../assets/Nfts/bighead-1.svg';
import img3 from '../../../assets/Nfts/bighead-2.svg';
import img4 from '../../../assets/Nfts/bighead-3.svg';
import img5 from '../../../assets/Nfts/bighead-4.svg';
import img6 from '../../../assets/Nfts/bighead-5.svg';
import img7 from '../../../assets/Nfts/bighead-6.svg';
import img8 from '../../../assets/Nfts/bighead-7.svg';
import img9 from '../../../assets/Nfts/bighead-8.svg';
import img10 from '../../../assets/Nfts/bighead-9.svg';
import ConfettiComponent from '../../Confetti';



const MemberComponent = ({img, name=" ", position=" "}) => {
  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <Section id='team'>
    <ConfettiComponent />
      <Title>Team</Title>
      <Container>
       <MemberComponent img={img1} name="Tony Stark" position="Founder" />
       <MemberComponent img={img2} name="Black Mamba" position="Co-Founder" />
       <MemberComponent img={img3} name="Scarlet Witch" position="Director" />
       <MemberComponent img={img4} name="She-Hulk" position="Manager" />
       <MemberComponent img={img5} name="Deadpool" position="Artist" />
       <MemberComponent img={img6} name="Sandman" position="Social Media Manager" />
       <MemberComponent img={img7} name="0xhaz" position="Blockchain Specialist" />
       <MemberComponent img={img8} name="Juggernaut" position="Web3 Developer" />
       <MemberComponent img={img9} name="Mr.Sinister" position="Graphic Designer" />
      </Container>
    </Section>
  )
}

export default Team