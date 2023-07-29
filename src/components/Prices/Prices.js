import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img
} from "./PriceStyles";
import {
  Section,
  SectionDivider,
  SectionTitle
} from "../../styles/GlobalComponents";
import { projects, design, services } from "../../constants/constants";

const Prices = () => (
  <div id="projects">
    <Section nopadding id="services">
    <SectionTitle main>Services</SectionTitle>
    </Section>
    <GridContainer>
      {services.map((s) => (
        <BlogCard key={s.id}>
          <Img src={s.image} />
          <HeaderThree title>{s.title}</HeaderThree>
            <Hr />
          <CardInfo>{s.description1}</CardInfo>
          <br/>
          <CardInfo>{s.description2}</CardInfo>
          <Hr />
          <CardInfo>{s.description3}</CardInfo>
          <CardInfo>{s.step1}</CardInfo>
          <CardInfo>{s.step2}</CardInfo>
          <CardInfo>{s.step3}</CardInfo>
          <CardInfo>{s.step4}</CardInfo>
          <Hr />
        </BlogCard>
      ))}
      
    </GridContainer>
    <TitleContent>*ALL PRICES SHOWN IN THE CARDS, MAKE REFERENCE TO THE "LANDING PAGE", "PROMOTIONAL" AND/OR "PROFESSIONAL PORTFOLIO" TYPE OF WEBPAGE, IF YOU NEED ANOTHER TYPE WEB SERVICE PLEASE CONTACT ME TO GET THE PRICE FOR YOUR REQUIREMENT.*</TitleContent>
    <Section nopadding>
    <br/>
    <br/>
    <br/>
    <SectionDivider />
    </Section>
    
  </div>
);

export default Prices;
