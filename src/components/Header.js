import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Badge, IconButton, TextField, Box } from "@mui/material";
import { ShoppingCart, Search, AccountCircle, Favorite } from "@mui/icons-material";
import logo from "../assets/logo.png"; 
import debounce from "lodash.debounce"; 

const Header = ({ cartCount, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  
  const debouncedSearch = debounce((query) => {
    onSearch(query);
  }, 500);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, []);

  return (
    <AppBar position="fixed" sx={{ background: "#333", padding: "10px 0"}}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
       
        <Box component="img" src={logo} alt="Logo" sx={{ height: 50 }} />

     
        <TextField
          variant="outlined"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          size="small"
          sx={{
            background: "#fff",
            borderRadius: 2,
            width: "40%",
            input: { padding: "10px" },
          }}
          InputProps={{
            startAdornment: <Search sx={{ marginRight: 1 }} />,
          }}
        />


        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <Favorite />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={cartCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
