import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Link, useNavigate } from "react-router-dom";

import { AuthWrapper } from "../components/AuthWrapper";

import React, { useEffect, useState } from "react";
import { useErrorContext } from "../context/error/ErrorContext";
import AlertComponent from "../components/Alert.component";

const Login = () => {
  const defaultTheme = createTheme();

  // context
  const { state, clearError, displayError,loginUser } = useErrorContext();
  const { showError, errorType, errorMessage, user, isLoading } =
    state;

  //   input declaration variables
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const [rememberMe, setRemember] = useState<boolean | undefined>(false);

  //   input handlers
  const onHandleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const onHandlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const onHandleRememberMeChange = () => {
    setRemember(!rememberMe);
  };

  // handle input blur events
  const onInputBlur = (): void => {
    clearError();
  };

  //   storing input data into user object
  const _user: Object = {
    email: email,
    password: password,
    rememberMe: rememberMe,
  };

  //   handling the form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let invalid: boolean = email === "" && password === "";
    if (invalid) {
      displayError();
      return;
    } else {
      clearError();
    }
    loginUser(_user);
  };

  // if user exists: redirect to dashboard screen
  const navigation = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigation("/dashboard/home");
      }, 3000);
    }
  }, [user, navigation]);

  return (
    <AuthWrapper>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "ButtonShadow" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            {showError && (
              <AlertComponent message={errorMessage} type={errorType} />
            )}

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={onHandleEmailChange}
                onBlur={onInputBlur}
                onFocus={onInputBlur}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onHandlePasswordChange}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="success"
                    checked={rememberMe}
                    onChange={onHandleRememberMeChange}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="success"
                disabled={isLoading}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    to={"/reset"}
                    className="text-text-decoration-underline text-primary"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to={"/register"}
                    className="text-text-decoration-underline text-primary"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </AuthWrapper>
  );
};

export default React.memo(Login);
