import React from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
} from "./ContactMeElements";

export default function ContactMe() {
  function sendEmail(emailData) {
    emailData.preventDefault();

    emailjs
      .sendForm(
        "Portfolio_ContactMeMSG",
        "template_ContactMeMSG",
        emailData.target,
        "user_mwZAXr1Skj6S6Xr8LvRys"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent succesfully! :D");
        },
        (error) => {
          console.log(error.text);
          alert("We are having trouble sending your email. D:");
        }
      );
    emailData.target.reset();
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Josiah Sanchez</Icon>
          <FormContent>
            <Form onSubmit={sendEmail}>
              <FormH1>Fill out the form to contact me!</FormH1>

              <FormLabel htmlFor="for">Subject:</FormLabel>
              <FormInput type="text" name="subject" required />
              <FormLabel htmlFor="for">Name:</FormLabel>
              <FormInput type="text" name="name" required />
              <FormLabel htmlFor="for">Message:</FormLabel>
              <FormInput type="text" name="message" required />
              <FormLabel htmlFor="for">Email:</FormLabel>
              <FormInput type="email" name="email" required />
              <FormLabel htmlFor="for">Phone Number:</FormLabel>
              <FormInput type="tel" name="phone" />

              <FormButton type="submit">Send Email</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

//Working message to my email template...
/* <h1>Contact Me</h1>
      <form onSubmit={sendEmail}>

        <input type="text" name="subject" required/>
        <label>Subject</label>

        <input type="text" name="name" />
        <label>Name</label>

        <textarea name="message" placeholder="Your Message..." required/>
        <label>Message</label>

        <input type="email" name="email" required/>
        <label>Email</label>

        <input type="tel" name="phone"/>
        <label>Phone Number (Optional)</label>

        <input type="submit" value="Send" />
      </form> */
