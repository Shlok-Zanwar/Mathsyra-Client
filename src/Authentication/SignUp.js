import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Styles';
import Container from '@material-ui/core/Container';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { InputAdornment } from '@material-ui/core';


export default function SignUp() {
  const classes = useStyles();
  const [hidePassword, setHidePassWord] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword ] = useState("");
  const [confirmPass, setConfirmPass] = useState("");


  const handleSubmit = e => {
    e.preventDefault();
    const signUpDetails = {
      name: firstName + " " + lastName,
      email: email,
      userName: userName,
      password: password,
    }
    console.log(signUpDetails)
    if(signUpDetails.password === signUpDetails.passwordConfrim){
      console.log("Confirmed")
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>

          <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) => {setFirstName(e.target.value)}}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => {setLastName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </Grid>
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

            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm password"
                label="Confirm pass"
                type={ hidePassword ? "password" : "text" }
                autoComplete="current-password"
                onChange={(e) => {setConfirmPass(e.target.value)}}
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
            Sign Up
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>

        </form>

      </div>
    </Container>
  );
}