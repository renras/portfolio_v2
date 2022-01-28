import React from "react";

import { Box, Typography } from "@mui/material";
import IconGroup from "./IconGroup";

const ContactInfo = () => {
  const contactInfo: any[] = [
    ["PHONE :", "+639455820565"],
    ["ADDRESS :", `#563 Rizal Street, Poblacion, Mangaldan, Pangasinan`],
    ["EMAIL :", "renzovisperas07@gmail.com"],
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        paddingTop: "1rem",
        flex: "1 1 0",
      }}
    >
      {contactInfo.map((contact, index) => {
        return (
          <Box
            key={index}
            sx={{
              maxWidth: { md: "15rem" },
              display: { xs: "flex", md: "block" },
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "1rem", md: "0" },
            }}
          >
            <Typography
              variant="body2"
              component="h3"
              color="primary"
              gutterBottom
            >
              {contact[0]}
            </Typography>
            <Typography variant="body1">{contact[1]}</Typography>
          </Box>
        );
      })}
      <IconGroup />
    </Box>
  );
};

export default ContactInfo;
