/*import React,{useState} from 'react'
import {CardContent, Typography,Card,Grid,TextField,Button,Stack} from "@mui/material";
import styles from '../styles.module.css';
import {Link,useNavigate} from "react-router-dom";
import Home from './Home';
import axios from "axios";

  const Login = () => {
    const [values,setValues]=useState({
      Email:'',
      Password:''
  }   );

  const navigate=useNavigate();
  const handleInput=(event)=>{
      console.log(event.target);
      setValues({...values,[event.target.name]:[event.target.value]})
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(values)
    axios.post('http://localhost:8081/login',values)
    .then(res=>{
      console.log(values.Email);
      navigate("/home",{ state: { userEmail: values.Email } })})
    .catch(err=>console.log(err))
  }

  return (
    <>
        <Typography  gutterBottom variant="h3" m={1} align="center" 
        >Login Form</Typography>
    <Card style={{maxWidth:450,margin:"0 auto",padding:"20px 5px"}} sx={{height:500,m:10
}}>
        <CardContent>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={1} >
                <Grid xs={12} item>
                    <TextField  type="email" name="Email" label="Email" placeholder="Enter Email" variant="outlined" fullWidth sx={{color:"green"}} onChange={handleInput}/>
                </Grid>
                <Grid xs={12} item> 
                    <TextField  type="password" name="Password" label="Password" placeholder="Enter Password" variant="outlined" fullWidth onChange={handleInput}/>
                </Grid>
                <Grid xs={12} item> 
                    <Button type="submit" variant="contained"  sx={{backgroundColor:"green",":hover":{bgcolor:"green",color:"white"}}} fullWidth>Login</Button>
                </Grid>
            </Grid>
            </form>
        </CardContent>
        <Stack spacing={1} flexWrap="row" flexDirection="row">
                    <p>Don't have account? </p>
                    <Link to="/signup" >Signup</Link>
        </Stack>

    </Card>
    </>
  )
}

export default Login;*/

import React, { useState } from 'react';
import { CardContent, Typography, Card, Grid, TextField, Button, Stack, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    Email: '',
    Password: ''
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', values)
      .then(res => {
        navigate("/home", { state: { userEmail: values.Email } });
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "green", mt: 5, mb: 2, fontWeight: "bold" }}
      >
        Login Form
      </Typography>
      <Card
        sx={{
          maxWidth: 450,
          margin: "0 auto",
          padding: "20px 5px",
          height: 'auto',
          boxShadow: 3,
          borderRadius: 2
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  name="Email"
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  fullWidth
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  name="Password"
                  label="Password"
                  placeholder="Enter Password"
                  variant="outlined"
                  fullWidth
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "green",
                    ":hover": { bgcolor: "darkgreen", color: "white" }
                  }}
                  fullWidth
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <Box textAlign="center" mt={2}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Typography variant="body2">Don't have an account?</Typography>
            <Link to="/signup" style={{ textDecoration: 'none', color: 'green', fontWeight: 'bold' }}>Signup</Link>
          </Stack>
        </Box>
      </Card>
    </>
  );
};

export default Login;
