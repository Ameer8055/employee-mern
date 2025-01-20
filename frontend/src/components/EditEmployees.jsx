import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../axiosInterceptor";


const Editemployees = () => {
  const location=useLocation();
  const[employee,setEmployee]=useState({
    Name:location.state.val.Name,
    Designation:location.state.val.Designation,
    Salary:location.state.val.Salary,
    Department:location.state.val.Department,
    Location:location.state.val.Location,  

  })

  const navigate= useNavigate();
  

  const handleEdit =()=>{
    if(location.state !=null)
    {
      axiosInstance.put('http://localhost:3000/employee/update/'+location.state.val._id,employee)
      .then(()=>{
        alert("Employee updated successfully")
        navigate('/employees')
      }).catch((error)=>{
        alert("Error updating employee")
        navigate('/edit')
      })
    }

  }
 


  return (
    <div>
      <Navbar/>
      <h3 className="text-center">EDIT EMPLOYEES</h3>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div className="d-flex justify-content-center">
          <TextField label="Name" value={employee.Name} onChange={(e)=>(setEmployee({...employee,Name:e.target.value}))} id="outlined-size-small" />
          <TextField label="Designation" value={employee.Designation} onChange={(e)=>(setEmployee({...employee,Designation:e.target.value}))} id="outlined-size-normal" />
        </div>
        <div className="d-flex justify-content-center">
          <TextField label="Salary" value={employee.Salary} onChange={(e)=>(setEmployee({...employee,Salary:e.target.value}))} id="filled-size-small" />
          <TextField label="Department" value={employee.Department} onChange={(e)=>(setEmployee({...employee,Department:e.target.value}))} id="filled-size-normal" />
        </div>
        <div className="d-flex justify-content-center">
          <TextField label="Location" value={employee.Location} onChange={(e)=>(setEmployee({...employee,Location:e.target.value}))} id="standard-size-small" />
        </div>
        <div className="d-flex justify-content-center">
          <Button className="bg-dark text-white" onClick={handleEdit}>Edit and Save </Button>
        </div>
      </Box>
    </div>
  );
};

export default Editemployees;
