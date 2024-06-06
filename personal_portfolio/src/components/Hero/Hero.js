import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        HET MAMTORA<br /><br />
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Full Stack Developer | Back-End Developer | Front-End Developer <br />
      </SectionText>
      <Button onClick={() => window.location = 'mailto:mamtorahet@yahoo.com'}>Email</Button>
    </LeftSection>
  </Section>
);

export default Hero;
