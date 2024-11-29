import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  TextField,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ShoppingCart, Search, AccountCircle, Favorite, Menu } from "@mui/icons-material";
import logo from "../assets/logo.png";
import debounce from "lodash.debounce";

const Header = ({ cartCount, onSearch, searchQuery }) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || "");
  
  
  const debouncedSearch = useRef(debounce((query) => {
    onSearch(query);
  }, 500)).current;

  
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setLocalSearchQuery(query);
    debouncedSearch(query); 
  };

  
  useEffect(() => {
    setLocalSearchQuery(searchQuery || "");
  }, [searchQuery]);

  
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" sx={{ background: "#333", padding: "10px 0" }}>
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
          placeholder="Search products..."
          value={localSearchQuery}
          onChange={handleSearchChange}
          size="small"
          sx={{
            background: "#fff",
            borderRadius: 2,
            width: { xs: "50%", md: "40%" },
            input: { padding: "10px" },
          }}
          InputProps={{
            startAdornment: <Search sx={{ marginRight: 1 }} />,
          }}
        />

        
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>
          <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Favorite />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Badge badgeContent={cartCount} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItem>
            </List>
          </Drawer>
        </Box>

       
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
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