import React from 'react';
import { DiFirebase, DiCss3, DiReact, DiZend, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of a technologies  in the web development world.
      From Back-End to Front-End.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/> <DiCss3 size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experienced with <br /> React.js</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experienced with <br /> Figma</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experienced with <br /> Node.js</ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
