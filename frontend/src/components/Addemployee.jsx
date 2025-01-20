import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./addemp.css";
import { Form, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../axiosInterceptor";


const Addemployee = () => {
  const [employee, setEmployee] = useState({
    Name: "",
    Designation: "",
    Salary: "",
    Department: "",
    Location: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  const validate = () => {
    const newErrors = {};
    if (!employee.Name) newErrors.Name = "Name is required";
    if (!employee.Designation) newErrors.Designation = "Designation is required";
    if (!employee.Salary) {
      newErrors.Salary = "Salary is required";
    } else if (isNaN(employee.Salary)) {
      newErrors.Salary = "Salary must be a number";
    }
    if (!employee.Department) newErrors.Department = "Department is required";
    if (!employee.Location) newErrors.Location = "Location is required";
    return newErrors;
  };

  const submissionFunc = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    axiosInstance.post('http://localhost:3000/employee/add', employee)
      .then((res) => {
        alert(res.data.message);
        navigate('/employees');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <Navbar />
      <h3 className="text-center">ADD EMPLOYEES</h3>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div className="d-flex justify-content-center">
          <TextField
            label="Name"
            name="Name"
            onChange={(e) => {
              setEmployee({ ...employee, Name: e.target.value });
              setErrors({ ...errors, Name: "" }); // Clear error on change
            }}
            id="outlined-size-small"
            error={!!errors.Name}
            helperText={errors.Name}
          />
          <TextField
            label="Designation"
            name="Designation"
            onChange={(e) => {
              setEmployee({ ...employee, Designation: e.target.value });
              setErrors({ ...errors, Designation: "" }); // Clear error on change
            }}
            id="outlined-size-normal"
            error={!!errors.Designation}
            helperText={errors.Designation}
          />
        </div>
        <div className="d-flex justify-content-center">
          <TextField
            label="Salary"
            name="Salary"
            onChange={(e) => {
              setEmployee({ ...employee, Salary: e.target.value });
              setErrors({ ...errors, Salary: "" }); // Clear error on change
            }}
            id="filled-size-small"
            error={!!errors.Salary}
            helperText={errors.Salary}
          />
          <TextField
            label="Department"
            name="Department"
            id="filled-size-normal"
            onChange={(e) => {
              setEmployee({ ...employee, Department: e.target.value });
              setErrors({ ...errors, Department: "" }); // Clear error on change
            }}
            error={!!errors.Department}
            helperText={errors.Department}
          />
        </div>
        <div className="d-flex justify-content-center">
          <TextField
            label="Location"
            name="Location"
            id="standard-size-small"
            onChange={(e) => {
              setEmployee({ ...employee, Location: e.target.value });
              setErrors({ ...errors, Location: "" }); // Clear error on change
            }}
            error={!!errors.Location}
            helperText={errors.Location}
          />
        </div>
        <div className="d-flex justify-content-center">
          <Button className="bg-dark text-white" onClick={submissionFunc}>
            SUBMIT
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Addemployee;
