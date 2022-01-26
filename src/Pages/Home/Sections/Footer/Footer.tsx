import React from "react";
import { Container, Box, Paper, Typography } from "@mui/material";
import Form from "./Form";
import Title from "../../../../Components/Title/Title";

const Footer = () => {
  const contactInfo: any[] = [
    ["PHONE :", "+639455820565"],
    ["ADDRESS", `#563 Rizal Street, Poblacion,\nMangaldan, Pangasinan`],
    ["EMAIL :", "renzovisperas07@gmail.com"],
  ];

  return (
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "40%",
            paddingTop: "3rem",
          }}
        >
          {contactInfo.map((contact, index) => {
            return (
              <Box key={index}>
                <Typography
                  variant="body2"
                  component="h3"
                  color="primary"
                  gutterBottom
                >
                  {contact[0]}
                </Typography>
                <Typography variant="body2">{contact[1]}</Typography>
              </Box>
            );
          })}
        </Box>
        <Form />
      </Container>
    </Paper>
  );
};

export default Footer;
