import React, { useState } from "react";
import "./header.css";
import {
  SearchOutlined,
  AccountCircleOutlined,
  ShoppingCartOutlined,
  StorefrontOutlined,
  MoreVertOutlined,
  ArrowDropDown,
  ArrowDropUp,
} from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="FlixCart Logo"
        />
      </div>
      <div className="search-bar">
        <div className="search-input">
          <SearchOutlined className="search-icon" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
      </div>
      <div className="user-menu">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleClose}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            endIcon={anchorEl ? <ArrowDropUp /> : <ArrowDropDown />}
          >
            <AccountCircleOutlined />
            Login
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <Button startIcon={<ShoppingCartOutlined />}>Cart</Button>
        <Button startIcon={<StorefrontOutlined />}>Become a Seller</Button>
        <Button startIcon={<MoreVertOutlined />}></Button>
      </div>
    </header>
  );
}

export default Header;
