import React from "react";
import { Container, Box, Paper, TextField, Button, Grid } from "@mui/material";

const Contact = () => {
  return (
    <Paper elevation={1}>
      <Container maxWidth="lg" sx={{ padding: "10rem 0" }}>
        <Box sx={{ display: "inline-block", width: "40%" }}>
          Contact Details
        </Box>
        <Grid
          component="form"
          action="https://formsubmit.co/renzovisperas07@gmail.com"
          method="POST"
          sx={{ display: "inline-flex", width: "60%" }}
          container
          spacing={2}
        >
          <Grid item xs={6}>
            <TextField required type="text" placeholder="Name" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField required type="email" placeholder="Email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField required type="text" placeholder="Subject" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              required
              type="text"
              placeholder="Message"
              fullWidth
              rows={5}
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
      </Container>
    </Paper>
  );
};

export default Contact;
