import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { InputAdornment } from '@material-ui/core';
import {useStyles} from "./Styles";
import axios from 'axios';


export default function Login() {
  const classes = useStyles();
  const [hidePassword, setHidePassWord] = useState(true);

  const [userName, setUserName] = useState("");
  const [password, setPassword ] = useState("");


  const handleSubmit = e => {
    e.preventDefault();
    const signUpDetails = {
      username: userName,
      password: password,
    }
    axios.post("/login", JSON.stringify(signUpDetails))
      .then(response =>{
          console.log(response);
          localStorage.setItem('JWTtoken', response.data.access_token);
          alert("Successfull");
          window.location.href = "/";
      })
      .catch(error => {
          console.log(error.response.data);
          // // console.log(window.location.pathname);
          // setSendRequest(sendRequest+1);
          // if(sendRequest >= 5){
          //     alert("Couldnt get details\nRefresh page ?")
          //     window.location.reload();
          // }
          alert(error.response.data.detail);
    })
    console.log(signUpDetails);
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid  container spacing={2} >
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="userName"
                        label="User Name"
                        name="userName"
                        autoComplete="fname"
                        onChange={(e) => {setUserName(e.target.value)}}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={ hidePassword ? "password" : "text" }
                        autoComplete="current-password"
                        onChange={(e) => {setPassword(e.target.value)}}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            { 
                                hidePassword ? 
                                <VisibilityOffIcon className={classes.showPassword} onClick={() => {setHidePassWord(false)}} /> : 
                                <VisibilityIcon className={classes.showPassword} onClick={() => {setHidePassWord(true)}} />
                            }
                            </InputAdornment>
                        ),
                        }}
                    />
                </Grid>
                
            </Grid>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}

            >
                Login
            </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signup">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>

        </form>

      </div>
    </Container>
  );
}