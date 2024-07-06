/*import React ,{useState}from 'react'
import {CardContent, Typography,Card,Grid,TextField,Button,Stack} from "@mui/material";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

const Form = () => {
    const[values,setValues]=useState({
        First_Name:'',
        Last_Name:'',
        Email:'',
        Password:''
    });

    const navigate=useNavigate();
    const handleChange=(event)=>{
        console.log(event.target);
        setValues({...values,[event.target.name]:[event.target.value]})
    }

    const handleSubmit=(event)=>{
         event.preventDefault();
         axios.post('http://localhost:8081/signup',values)
         .then(res=>{navigate("/login")})
         .catch(err=>console.log(err))
    }
  return (
    <>
    <Typography  gutterBottom variant="h3" m={1} align="center" sx={{color:"green",m:5,fontWeight:"bolder"}}>SignUp Form</Typography>
    <Card style={{maxWidth:450,margin:"0 auto",padding:"20px 5px"}} sx={{height:500,m:10
}}>
        <CardContent>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={1} >
                <Grid xs={12} sm={6} item >
                    <TextField label="First Name" name="First_Name" placeholder="Enter First Name" variant="outlined" fullWidth onChange={handleChange}/>
                </Grid>
                <Grid xs={12} sm={6}  item>
                    <TextField label="Last Name"  name="Last_Name" placeholder="Enter Last Name" variant="outlined" fullWidth onChange={handleChange}/>
                </Grid>
                <Grid xs={12} item>
                    <TextField  type="email"  name="Email" label="Email" placeholder="Enter Email" variant="outlined" fullWidth onChange={handleChange}/>
                </Grid>
                <Grid xs={12} item> 
                    <TextField  type="password"  name="Password" label="Password" placeholder="Enter Password" variant="outlined" fullWidth onChange={handleChange}/>
                </Grid>
                <Grid xs={12} item> 
                    <Button type="submit" variant="contained"  sx={{backgroundColor:"green",":hover":{bgcolor:"green",color:"white"}}} fullWidth>Sign up</Button>
                </Grid>
            </Grid>
            </form>
        </CardContent>
        <Stack spacing={1} flexWrap="row" flexDirection="row">
                    <p>Already have account? </p>
                    <Link to="/login" >Login</Link>
        </Stack>
    </Card>
    </>
  )
}

export default Form;*/

import React, { useState } from 'react';
import { CardContent, Typography, Card, Grid, TextField, Button, Stack, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const [values, setValues] = useState({
    First_Name: '',
    Last_Name: '',
    Email: '',
    Password: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/signup', values)
      .then(res => { navigate("/login") })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "green", mt: 5, mb: 2, fontWeight: "bold" }}
      >
        SignUp Form
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
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="First_Name"
                  placeholder="Enter First Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="Last_Name"
                  placeholder="Enter Last Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  name="Email"
                  label="Email"
                  placeholder="Enter Email"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <Box textAlign="center" mt={2}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <Typography variant="body2">Already have an account?</Typography>
            <Link to="/login" style={{ textDecoration: 'none', color: 'green', fontWeight: 'bold' }}>Login</Link>
          </Stack>
        </Box>
      </Card>
    </>
  );
};

export default Form;
