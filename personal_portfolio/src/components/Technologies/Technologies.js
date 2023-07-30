import React from 'react';
import {DiCss3, DiReact, DiCss3Full, DiHtml5, DiNodejs, DiPhp, DiMysql, DiMongodb, DiDatabase, DiHtml5Connectivity, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { Div2 } from '../Header/HeaderStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with range of a technologies in the web development world.
      From Back-End to Front-End.
    </SectionText>
    
    <List>
      
      <ListItem>
        <div>
          <DiReact size='3rem'/>
          <DiCss3 size='3rem'/>
          <DiCss3Full size='3rem'/>
          <DiHtml5 size='3rem'/>
        </div>
        
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experienced with <br /> React.js, CSS, TailwindCSS, HTML</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
          <DiNodejs size='3rem'/>
          <DiPhp size='3rem'/>
        </div>
        
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experienced with <br /> NodeJS, ExpressJS, PHP</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
          <DiMongodb size='3rem'/>
          <DiMysql size='3rem'/>
          <DiDatabase size='3rem'/>
        </div>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>Experienced with <br /> Node.js</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
          <DiHtml5Connectivity size='3rem'/>
        </div>
        <ListContainer>
          <ListTitle>API Testing</ListTitle>
          <ListParagraph>Beginner experienc with <br /> RestAPI, Postman API Testing, Redux Toolkit</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
          <DiZend size='3rem'/>
        </div>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experienced with <br /> Figma Design use for front-end development</ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
