import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({
    Email: "",
    Password: "",
  });
  const navigate = useNavigate();

  const loginfunction = () => {
    if (form.Email === "Admin" && form.Password === "Admin123") {
      axios
        .post("http://localhost:3000/admin/login", form)
        .then((res) => {
          alert(res.data.message);
          if (res.data.token) {
            sessionStorage.setItem('logintoken', res.data.token);
            navigate("/home");
          }
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      axios
        .post("http://localhost:3000/user/login", form)
        .then((res) => {
          alert(res.data.message);
          if (res.data.token) {
            sessionStorage.setItem("logintoken", res.data.token);
            navigate("/UserHome");
          } else {
            navigate("/login");
          }
        })
        .catch((err) => {
          alert("Invalid Login");
          navigate("/login");
        });
    }
  };

  return (
    <>
      <h2 className={styles.login}>LOGIN</h2>
      <Box
        className="text-center"
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Email"
          id="outlined-size-small"
          name="Email"
          onChange={(e) => {
            setForm({ ...form, Email: e.target.value });
          }}
        />
        <br />
        <TextField
          label="Password"
          name="Password"
          id="outlined-size-normal"
          onChange={(e) => {
            setForm({ ...form, Password: e.target.value });
          }}
        />
        <br />
        <Button className="text-white bg-dark" onClick={loginfunction}>
          LOGIN
        </Button>
        <br />
        <div>New User?</div>
        <Link to={"/"}>SIGNUP</Link>
      </Box>
    </>
  );
};

export default Login;
