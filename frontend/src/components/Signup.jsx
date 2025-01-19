import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
  });

  const handleSignup = () => {
    const { Name, Email, Phone, Password } = form;
    const navigate = useNavigate();

    axios.post("http://localhost:3000/user/signup", {
      Name,
      Email,
      Phone,
      Password,
    }).then((res)=>{
      alert('Signup Success')
      navigate('/login')
    }).catch((err)=>{
      alert(err.message)
    })
  };

  return (
    <div>
      <h2 className={styles.signup}>SIGNUP</h2>
      <Box
        className="text-center"
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <br />
        <TextField
          label="NAME"
          name="Name"
          onChange={(e) => {
            setForm({ ...form, Name: e.target.value });
          }}
        />
        <br />

        <TextField
          label="EMAIL"
          name="Email"
          onChange={(e) => {
            setForm({ ...form, Email: e.target.value });
          }}
        />
        <br />

        <TextField
          label="PH NO"
          name="Phone"
          onChange={(e) => {
            setForm({ ...form, Phone: e.target.value });
          }}
        />
        <br />

        <TextField
          label="PASSWORD"
          name="Password"
          onChange={(e) => {
            setForm({ ...form, Password: e.target.value });
          }}
        />
        <br />

        <Button
          className="bg-dark text-white"
          onClick={handleSignup}
        >
          SIGN UP
        </Button>
      </Box>
      <Link to={"/login"}>
        <div className="text-center">Login</div>
      </Link>
    </div>
  );
};

export default Signup;
