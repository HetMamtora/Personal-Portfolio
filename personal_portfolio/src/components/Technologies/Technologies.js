import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import { FaJava } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { TbApi, TbBrandVscode, TbBrandMongodb } from "react-icons/tb";
import { SiTailwindcss, SiMysql, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiExpress, SiNextdotjs, SiRedux, SiGithub, SiPostman, SiServerless, SiFirebase } from "react-icons/si";


const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>TECHNICAL SKILLS</SectionTitle>
    <SectionText>
      I've worked with range of a technologies which leverage all my skills and expertise over Full Stack Development from whole Back-End to Front-End.
    </SectionText>
    
    <List>
      
      <ListItem>
        <div>
          <SiJavascript size='3rem'/> &nbsp;
          <SiMysql size='3rem'/> &nbsp;
          <SiMongodb size='3rem'/> &nbsp;
          <FaJava size='3rem'/> &nbsp;
          <SiHtml5 size='3rem'/> &nbsp;
          <SiCss3 size='3rem'/> &nbsp;
          <SiTailwindcss size='3rem'/> &nbsp;
        </div>
        
        <br/>

        <ListContainer>
          <ListTitle>LANGUAGES</ListTitle>
          <ListParagraph> JavaScript, SQL, NoSQL, Java, HTML/CSS, TailwindCSS</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
          <SiNodedotjs size='3rem'/> &nbsp;
          <SiReact size='3rem'/> &nbsp;
          <SiExpress size='3rem'/> &nbsp;
          <SiNextdotjs size='3rem'/> &nbsp;
          <TbApi size='3rem'/> &nbsp;
          <SiRedux size='3rem'/> &nbsp;
        </div>
        
        <br/>

        <ListContainer>
          <ListTitle>FRAMEWORKS</ListTitle>
          <ListParagraph>NodeJS, ReactJS, ExpressJS, NextJS, REST API, Mongoose, Redux Toolkit</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div>
          <TbBrandVscode size='3rem'/> &nbsp;
          <SiGithub size='3rem'/> &nbsp;
          <SiPostman size='3rem'/> &nbsp;
          <AiFillThunderbolt size='3rem'/> &nbsp;
          <TbBrandMongodb size='3rem'/> &nbsp;
          <SiServerless size='3rem'/> &nbsp;
          <SiFirebase size='3rem'/> &nbsp;
        </div>

        <br/>

        <ListContainer>
          <ListTitle>DEVELOPER TOOLS</ListTitle>
          <ListParagraph>VS Code, GitHub, Postman, Thunder Client, MongoDB Atlas, SQL Server, Firebase</ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
