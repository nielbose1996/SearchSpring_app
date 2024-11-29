import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import jeansImage from "../assets/jeans.jpg";
import jacketsImage from "../assets/jackets.jpg";
import shortsImage from "../assets/shorts.jpg";
import tshirtsImage from "../assets/tshirts.jpg";

const categories = [
  { name: "Jeans", image: jeansImage },
  { name: "Jackets", image: jacketsImage },
  { name: "Shorts", image: shortsImage },
  { name: "T-Shirts", image: tshirtsImage },
];

const HeroSection = ({ onCategoryClick }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "60px 20px",
        marginTop: "100px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
        color: "#fff",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: 3,
          textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
        }}
      >
        Shop the Best Deals!
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 4,
          textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
        }}
      >
        Discover stylish products at unbeatable prices.
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {categories.map((category) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={category.name}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              onClick={() => onCategoryClick(category.name)} 
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "300px",
                height: "200px",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.5)",
                },
              }}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  color: "#fff",
                  fontWeight: "bold",
                  textShadow: "1px 1px 6px rgba(0,0,0,0.8)",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {category.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeroSection;
