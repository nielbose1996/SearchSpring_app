import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
   
      sx={{
        background: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        
        marginTop: "auto"
        
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        © 2024 Search Spring. All Rights Reserved.
      </Typography>
      <Box>
        <IconButton color="inherit">
          <Facebook />
        </IconButton>
        <IconButton color="inherit">
          <Instagram />
        </IconButton>
        <IconButton color="inherit">
          <Twitter />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
