import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Your Name <br /><br />
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        ReactJS Developer | Front-End Developer | Back-End Deveoper <br />
      </SectionText>
      <Button onClick={() => window.location = 'mailto:mamtorahet@yahoo.com'}>Email</Button>
    </LeftSection>
  </Section>
);

export default Hero;
