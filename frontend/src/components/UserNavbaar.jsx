import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link, useNavigate } from "react-router-dom";
  
  const UserNavbaar = () => {
    const navigate=useNavigate();
    const stroge=()=>{
      sessionStorage.removeItem('logintoken')
      navigate('/login')
      
    }
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Employee Application
              </Typography>
              <Link to={"/Userhome"}>
                <Button className="bg-warning text-black me-2">Home</Button>
              </Link>
              <Link to={"/UserEmployess"}>
                <Button className="bg-warning text-black me-2 " color="inherit">Employees</Button>
              </Link>
               <Button className="bg-warning text-black me-2" color="inherit" onClick={stroge}>Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
  };
  
  export default UserNavbaar;
  