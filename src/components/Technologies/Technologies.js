import React from "react";
import { IoLogoNodejs, IoMdColorPalette } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My front-end web development skills include expertise in HTML, CSS,
      JavaScript and React. These technologies allow me to create
      responsive, interactive and visually appealing web pages.<br/><br/>My
      portfolio demonstrates my proficiency in building dynamic websites and web
      applications with a focus on optimization, user experience and search
      engine visibility.
    </SectionText>
    <List>
      <ListItem>
        <RiReactjsLine size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js
            <br />
            HTML
            <br />
            CSS
            <br />
            Javascript
            <br />
            Bootstrap
            <br />
            Ant-Design
            <br />
            Material-UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoLogoNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Express.js
            <br />
            Node.js
            <br />
            PHP
            <br />
            MySQL
            <br />
            PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <IoMdColorPalette size="3rem" />
        <ListContainer>
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Figma
            <br />
            Adobe XD
            <br />
            Adobe Photoshop
            <br />
            Adobe Premiere
            <br />
            Adobe Audition
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
