import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        HET MAMTORA <br /><br />
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A result driven and passionate ReactJS Developer. Also having an active hands-on experiences with Fron-End and Back-End Development using various technologies.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:mamtorahet@yahoo.com'}>Email</Button>
    </LeftSection>
  </Section>
);

export default Hero;