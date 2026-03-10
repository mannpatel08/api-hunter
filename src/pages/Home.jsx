import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

function Home({ products = [], loading }) {
    console.log(products);
  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        sx={{ marginTop: 3, marginBottom: 3 }}
      >
        Mobile Store 📱
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;