import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import ContactMeButton from "../ContactMe/ContactMeButton";
import { LeftSection } from "./HeroStyles";
import { BsRocketTakeoff } from 'react-icons/bs';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Give your business the best chance to grow.&nbsp;&nbsp;&nbsp;<BsRocketTakeoff/>
      </SectionTitle>
      <SectionText>
        Frontend Developer with a passion for building beautiful and functional
        Websites, that help to grow your business and provide the best user experience for
        your clients, make your services memorables.
      </SectionText>
      <ContactMeButton name="Contact Me 📨" />
    </LeftSection>
  </Section>
);

export default Hero;
