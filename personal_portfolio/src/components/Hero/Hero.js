import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Full Stacl Developer | ReactJS Developer | Front End Developer
      </SectionText>
      <Button onClick={() => window.location = 'mailto:mamtorahet@yahoo.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;