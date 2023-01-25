import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div className="footer-bg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2>eCommerce</h2>
          <Stack direction="row" spacing={2}>
            <LocationOnIcon color="success" />
            <h5>75, Colombo, Sri Lanka</h5>
          </Stack>
          <Stack direction="row" spacing={2}>
            <LocalPhoneIcon color="success" />
            <h5> +94 123456789</h5>
          </Stack>
          <Stack direction="row" spacing={2}>
            <EmailIcon color="success" />
            <h5>info@gmail.com</h5>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
