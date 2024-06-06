import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+1234567890"> Call Me </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:abc@yahoo.com">
            Personal Mail
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
          
        </CompanyContainer>
        <CompanyContainer>
          <Slogan><span style={{color:"orange"}}>Made with <span style={{color:"red"}}>&#10084;</span> &#169; Het Mamtora</span></Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/HetMamtora">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/het-mamtora/">
            <span style={{color:"#0077B5"}}><AiFillLinkedin size="3rem" /> </span>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
