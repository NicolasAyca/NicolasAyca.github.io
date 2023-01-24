import React, { useState } from "react";
import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { FloatButton, Form, Input, Modal } from "antd";
import ContactMeButton from "./ContactMeButton";

function ContactMe() {
  return (
    <Section id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <SectionText>
        Your great Idea is about to come to life and change your business!
        <br /> You're just one click away to make it happen!
      </SectionText>
      <br />
      <br />
      <br />
      <ContactMeButton name="Lets Do it! 🫱🏼‍🫲🏻" />
      <br />
      <br />
      <br />
    </Section>
  );
}

export default ContactMe;
