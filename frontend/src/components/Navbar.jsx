import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const stroge=()=>{
    sessionStorage.removeItem('logintoken');
    console.log(sessionStorage.getItem('logintoken'));
  }
  const strogee=()=>{
    console.log(sessionStorage.getItem('logintoken'))
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Employee Application
            </Typography>
            <Link to={"/home"}>
              <Button className="bg-warning text-black me-2">Home</Button>
            </Link>
            <Link to={"/employees"}>
              <Button className="bg-warning text-black me-2 " color="inherit">Employees</Button>
            </Link>
            <Link to={"/addemployee"}>
              <Button className="bg-warning text-black me-2" color="inherit" onClick={strogee}>Add Employees</Button>
            </Link>
            <Link to={'/login'}>
             <Button className="bg-warning text-black me-2" color="inherit" onClick={stroge}>Logout</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
