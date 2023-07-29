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
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <br />
          <CardInfo>{project.description1}</CardInfo>
          <br />
          <CardInfo>{project.description2}</CardInfo>
          <br />
          <CardInfo>
            {/* in this part the code looks for the visit lenght and determine if it have a link, if it doesn't, the code don't render the link*/}
            {project.visit.length > 0 && (
              <div>
                <p>Visit the site here:</p>
                <a
                  href={project.visit}
                  target="_blank"
                  style={{ color: "#CCEEFF" }}
                >
                  {project.visit}
                </a>
              </div>
            )}
          </CardInfo>
          <Hr />
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
