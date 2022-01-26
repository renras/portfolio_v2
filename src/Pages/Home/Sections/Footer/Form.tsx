import React from "react";
import { TextField, Button, Grid } from "@mui/material";

const Form = () => {
  return (
    <Grid
      component="form"
      action="https://formsubmit.co/renzovisperas07@gmail.com"
      method="POST"
      container
      spacing={2}
      sx={{ display: "inline-flex", width: "60%" }}
    >
      <Grid item xs={6}>
        <TextField
          required
          type="text"
          placeholder="Name"
          fullWidth
          name="name"
        ></TextField>
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          type="email"
          placeholder="Email"
          name="email"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          type="text"
          placeholder="Subject"
          name="subject"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          multiline
          required
          type="text"
          placeholder="Message"
          fullWidth
          rows={5}
          name="message"
        />
      </Grid>
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
