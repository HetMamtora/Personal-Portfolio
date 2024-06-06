import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: 'Deployed projects from small scale to intermediate scale'},
  { number: 15, text: 'Technical skills with hands-on experience in each of it'},
  { number: 20, text: 'GitHub Repositories'},
  { number: 2, text: 'years of experience in Full Stack over personalized projects'}
];
const data1 = [
  { title: 'Learn Java Programming', text: 'View Certificate' },
];
const data2 = [
  { title: '100DaysOfCode', text: '5th February, 2024 to 15th May, 2024 - TRACK it on GitHub' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    
    <Boxes>
      {data1.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText><a style={{ textDecoration: 'underline', color: 'orange' }} href="https://www.udemy.com/certificate/UC-ddf287c4-e89a-46e8-8a9b-08b2750e1b93/">{card.text}</a></BoxText>
        </Box>
      ))}
      {data2.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText><a style={{ textDecoration: 'underline', color: 'orange' }} href="https://github.com/HetMamtora">{card.text}</a></BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
