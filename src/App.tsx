import React from "react";
import "./App.css";

import TopAppBar from "./components/appBar";
import Products from "./components/products";
import Category from "./components/categories";
import Footer from "./components/footer";
import MainBanner from "./components/mainBanner";
import Offers from "./components/offerBanner";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Ad1 from "../src/assets/images/ad1.png";
import Ad2 from "../src/assets/images/ad2.png";
import Ad3 from "../src/assets/images/ad3.png";
import adBanner from "../src/assets/images/adBanner.png";

function App() {
  return (
    <div className="App">
      <TopAppBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <br />
            <MainBanner />
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <img src={Ad1} alt="ad1" className="ad-image" />
                <br />
                <Paper elevation={2}>
                  <img src={Ad2} alt="ad2" className="ad-image" />
                  <Stack
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    <h4>Smart Watch</h4>
                    <p>Smart Watch</p>
                    <Button variant="contained" color="warning">
                      Offer
                    </Button>
                  </Stack>
                  <br />
                </Paper>
                <br />
                <Paper elevation={2}>
                  <img src={Ad2} alt="ad2" className="ad-image" />
                  <Stack
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    <h4>Smart Watch</h4>
                    <Button variant="contained" color="warning">
                      Offer
                    </Button>
                  </Stack>
                  <br />
                </Paper>
              </Grid>
              <Grid item xs={12} md={10}>
                <Products />
                <br />
                <img src={adBanner} alt="bannerAd" className="ad-banner" />
                <Category />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} direction={"xs" ? "row" : "column"}>
            <br />
            <img src={Ad3} alt="ad3" className="ad-image" />
            <img src={Ad3} alt="ad3" className="ad-image" />
            <img src={Ad3} alt="ad3" className="ad-image" />
            <img src={Ad3} alt="ad3" className="ad-image" />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Offers />
            <br />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
