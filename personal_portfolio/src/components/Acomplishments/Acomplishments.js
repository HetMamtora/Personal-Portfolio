import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Open Source Projects'},
  { number: 10, text: 'Technologies Hands-On Experience', },
  { number: 5, text: 'GitHub Repositories', },
  { number: 2, text: 'years of experience in front-end, over self projects', }
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
  </Section>
);

export default Acomplishments;
