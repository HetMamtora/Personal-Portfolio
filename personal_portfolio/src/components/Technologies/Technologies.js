import React from 'react';
import {DiCss3, DiReact, DiCss3Full, DiHtml5, DiNodejs, DiPhp, DiMysql, DiMongodb, DiDatabase, DiHtml5Connectivity, DiZend } from 'react-icons/di';
import { FaJava } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
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
          <SiJavascript size='3rem'/>
          <DiMysql size='3rem'/>
          <DiMongodb size='3rem'/>
          <FaJava size='3rem'/>
          <SiHtml5 size='3rem'/>
          <SiCss3 size='3rem'/>
          <SiTailwindcss size='3rem'/>
        </div>
        
        <ListContainer>
          <ListTitle>LANGUAGES</ListTitle>
          <ListParagraph> JavaScript, SQL, NoSQL, Java, HTML/CSS, TailwindCSS</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
          <DiNodejs size='3rem'/>
          <DiPhp size='3rem'/>
        </div>
        
        <ListContainer>
          <ListTitle>FRAMEWORKS</ListTitle>
          <ListParagraph>Experienced with <br /> NodeJS, ExpressJS, PHP</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
          
          
          <DiDatabase size='3rem'/>
        </div>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>Experienced with <br /> MongoDB, SQL, phpMyAdmin</ListParagraph>
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
          <ListParagraph>Experienced with <br /> Figma Design use for front-end web development</ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
