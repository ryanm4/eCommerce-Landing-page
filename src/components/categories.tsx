import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import cat1 from "../assets/images/cat1.png";
import cat2 from "../assets/images/cat2.png";
import cat3 from "../assets/images/cat3.png";
import cat4 from "../assets/images/cat4.png";

export default function Category() {
  return (
    <div>
      <Grid container direction="column" spacing={3}>
        <Grid item xs={3} md={3}>
          <Box flexGrow={1}>
            <img src={cat1} alt="categories" />
            <img src={cat2} alt="categories" />
            <img src={cat3} alt="categories" />
            <img src={cat4} alt="categories" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
