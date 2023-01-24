import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import ContactMeButton from "../ContactMe/ContactMeButton";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        A Engineer, Developer & Designer for you.
      </SectionTitle>
      <SectionText>
        I am a recent graduate web developer from Chile 🇨🇱 with skills in HTML,
        CSS, JavaScript, React, and Node.js. My portfolio features responsive
        designs, optimized website performance, and robust security measures. I
        am looking for opportunities to apply my skills and continue to grow as
        a developer. My portfolio is the best way to know more about my skills.
      </SectionText>
      <ContactMeButton name="Contact Me 📨" />
    </LeftSection>
  </Section>
);

export default Hero;
