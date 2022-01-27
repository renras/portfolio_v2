import React from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";

const Form = () => {
  const textFields = [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "subject",
      type: "text",
    },
    {
      name: "message",
      type: "text",
    },
  ];

  return (
    <Grid
      component="form"
      action="https://formsubmit.co/renzovisperas07@gmail.com"
      method="POST"
      container
      spacing={2}
      sx={{ display: "inline-flex", width: "60%" }}
    >
      {textFields.map((textField, index) => {
        return (
          <Grid
            key={index}
            item
            xs={
              textField.name === "name" || textField.name === "email" ? 6 : 12
            }
          >
            <TextField
              required
              type={textField.type}
              placeholder={
                textField.name.charAt(0).toUpperCase() + textField.name.slice(1)
              }
              fullWidth
              name={textField.name}
              {...(textField.name === "message" && {
                rows: 5,
                multiline: true,
              })}
            ></TextField>
          </Grid>
        );
      })}
      <Grid item xs={12}>
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{
            fontWeight: "bold",
            marginTop: "1rem",
            marginLeft: "auto",
            display: "block",
          }}
        >
          Send Message
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
