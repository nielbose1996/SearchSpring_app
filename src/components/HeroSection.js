import React from "react";
import { Box, Button, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "60px 20px",
        marginTop:"100px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
        color: "#fff",
        
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        Shop the Best Deals!
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 4 }}>
        Discover stylish products at unbeatable prices.
      </Typography>
      <Box>
        {["Jeans", "Shorts", "Towels", "Hats"].map((category) => (
          <Button
            key={category}
            variant="contained"
            sx={{
              margin: 1,
              padding: "10px 20px",
              background: "#ff5722",
              "&:hover": { background: "#e64a19" },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default HeroSection;
