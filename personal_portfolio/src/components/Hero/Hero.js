import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        HET MAMTORA<br />
        I am a <br />
        Full Stack Developer
      </SectionTitle>
      <SectionText>
        MERN Stack Developer | Back-End Developer | NodeJS Developer | Front-End Developer | ReactJS Developer<br />
      </SectionText>
      <Button onClick={() => window.location = 'mailto:mamtorahet@yahoo.com'}>Email</Button>
    </LeftSection>
  </Section>
);

export default Hero;
