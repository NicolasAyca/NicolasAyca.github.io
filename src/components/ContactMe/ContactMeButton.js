import React, { useState } from "react";
import Button from "../../styles/GlobalComponents/Button";
import { Modal } from "antd";
import { Section } from "../../styles/GlobalComponents";

function ContactMeButton(props) {
  //modal state from antd
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const title = props.name;

  return (
    <>
      <Button onClick={showModal}>{title}</Button>
      <Modal
        title="Get in Touch"
        bodyStyle={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: "1.7rem",
        }}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={true}
      >
        <Section>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            action="https://public.herotofu.com/v1/4bd149a0-9b41-11ed-82c7-3d7607318e65"
            method="post"
          >
            <div>
              <label for="name">Your Name</label>
              <br />
              <input name="Name" id="name" type="text" required />
            </div>
            <div>
              <label for="email" id="contact-lbl-email">
                Your Email
              </label>
              <br />
              <input name="Email" id="email" type="email" required />
            </div>
            <div>
              <label for="email" id="contact-lbl-msg">
                Message
              </label>
              <br />
              <textarea
                required
                name="comments"
                rows="15"
                cols="40"
                placeholder="whether you want to work with me or want more information this is the space where we can start talking!"
              ></textarea>
            </div>
            <div>
              <input
                id="submit-button"
                type="submit"
                value="Submit"
                style={{
                  color: "white",
                  background: "hsl(232.7,27.3%,23.7%)",
                  padding: "1.5rem",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  width: "30rem",
                }}
              />
            </div>
          </form>
        </Section>
      </Modal>
    </>
  );
}

export default ContactMeButton;
