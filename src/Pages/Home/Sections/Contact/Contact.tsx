import React from "react";

import { Container, Paper } from "@mui/material";
import ContactInfo from "./ContactInfo";

import Form from "./Form";
import Title from "../../../../Components/Title/Title";

const Contact = () => {
  return (
    <footer>
      <Paper
        component="footer"
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10rem",
          padding: "10rem 0",
          justifyContent: "center",
        }}
      >
        <Title center sx={{ margin: "auto" }}>
          Contact Me
        </Title>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
          }}
        >
          <ContactInfo />
          <Form />
        </Container>
      </Paper>
    </footer>
  );
};

export default Contact;
