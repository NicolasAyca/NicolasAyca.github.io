import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer
} from "./FooterStyles";
import { SectionSubText } from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact Info</LinkTitle>
          <LinkItem>Nicolas Ayca</LinkItem>
          <LinkItem href="mailto:contact.n.ayca@gmail.com?subject=Contact Email">
            contact.n.ayca@gmail.com
          </LinkItem>
          <LinkItem>Antofagasta, Chile</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Social Media</LinkTitle>
          <LinkItem href="https://www.github.com/nicolasayca" target="_blank">
            <AiFillGithub size="2.5rem" />
            &nbsp;Github
          </LinkItem>
          <LinkItem href="https://www.linkedin.com/in/nicol%C3%A1s-ayca-nova-b1a185153/" target="_blank">
            <AiFillLinkedin size="2.5rem" />
            &nbsp;LinkedIn
          </LinkItem>
          <LinkItem href="https://www.twitter.com/nickayca" target="_blank">
            <AiFillTwitterCircle size="2.5rem" />
            &nbsp;Twitter
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Navigation Links</LinkTitle>
          <LinkItem className="projects" href="#projects">Projects</LinkItem>
          <LinkItem className="technologies" href="#tech">Technologies</LinkItem>
          <LinkItem className="About" href="#about">About</LinkItem>
          <LinkItem className="Contact Me" href="#contact">Contact Me</LinkItem>
        </LinkColumn>
      </LinkList>
      <SectionSubText>Handcrafted @ 2023&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Nicolas Ayca © 2023</SectionSubText>
    </FooterWrapper>
  );
};

export default Footer;
