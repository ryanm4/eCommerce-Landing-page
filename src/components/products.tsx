import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import prdImg from "../assets/images/prd.png";

const prds = [
  { id: 0, name: "name", price: "$30.00", imgUrl: prdImg },
  { id: 1, name: "name1", price: "$30.00", imgUrl: prdImg },
  { id: 2, name: "name2", price: "$30.00", imgUrl: prdImg },
  { id: 3, name: "name3", price: "$30.00", imgUrl: prdImg },
  { id: 4, name: "name3", price: "$30.00", imgUrl: prdImg },
  { id: 5, name: "name3", price: "$30.00", imgUrl: prdImg },
  { id: 6, name: "name3", price: "$30.00", imgUrl: prdImg },
  { id: 7, name: "name3", price: "$30.00", imgUrl: prdImg },
  { id: 8, name: "name3", price: "$30.00", imgUrl: prdImg },
  { id: 9, name: "name3", price: "$30.00", imgUrl: prdImg },
  { id: 10, name: "name3", price: "$30.00", imgUrl: prdImg },
  { id: 11, name: "name3", price: "$30.00", imgUrl: prdImg },
];

export default function Products() {
  return (
    <div>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {prds.map((pd, idx) => (
          <Grid item xs={6} md={2} key={idx}>
            <Box sx={{ flexGrow: 1 }}>
              <Paper elevation={2} sx={{ padding: 1 }}>
                <img src={pd.imgUrl} alt="product" className="product-img" />
                <h5 className="product-name">{pd.name}</h5>
                <h6 className="product-price">{pd.price}</h6>
                <Stack direction='row' spacing={2}>
                <IconButton aria-label="addToCart" color="success">
                  <AddShoppingCartIcon/>                
                </IconButton>
                <IconButton aria-label="addToCart" color="error">
                  <FavoriteBorderIcon/>                
                </IconButton>
                </Stack>
              </Paper>
            </Box>
          </Grid>
        ))}
        <Button variant="outlined" color="success" sx={{ marginTop: 2 }}>
          More
        </Button>
      </Grid>
    </div>
  );
}
