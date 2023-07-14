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
import React, { useCallback, useEffect, useState } from "react";
import { useErrorContext } from "../context/error/ErrorContext";
import AlertComponent from "../components/Alert.component";

const Register = () => {
  const defaultTheme = createTheme();

  const [firstName, setFirstName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [isSubscribed, setSubscribed] = useState<boolean | undefined>(false);
  const [isClient, setIsClient] = useState<Boolean>(true);

  const navigation = useNavigate();

  // input values handled
  const onHandleFNameChange = (event: any) => {
    setFirstName(event.target.value);
  };
  const onHandleLNameChange = (event: any) => {
    setLastName(event.target.value);
  };
  const onHandleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const onHandlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const onHandleSubscribtionChange = () => {
    setSubscribed(!isSubscribed);
  };

  const _user: Object = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    isClient: isClient,
    isSubscribed: isSubscribed,
  };

  const { state, displayError, clearError, registerUser } = useErrorContext();
  const { showError, errorMessage, errorType, isLoading, user, token } = state;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let invalid: boolean =
      firstName === "" && lastName === "" && email === "" && password === "";
    if (invalid) {
      displayError();
    } else {
      clearError();
    }
    setIsClient(true);
    registerUser(_user);
  };

  // handle input blur and focus:
  const onInputBlur = (): void => {
    clearError();
  };

  // redirecting user if no error
  console.log(user);
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigation("/dashboard");
      },5000);
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
              Sign up
            </Typography>

            {showError && (
              <AlertComponent message={errorMessage} type={errorType} />
            )}

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={onHandleFNameChange}
                    onBlur={onInputBlur}
                    onFocus={onInputBlur}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={onHandleLNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={onHandleEmailChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={onHandlePasswordChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="success"
                        checked={isSubscribed}
                        onChange={onHandleSubscribtionChange}
                      />
                    }
                    label="I want to receive jobs & guides updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="success"
                disabled={isLoading}
                // disabled={error}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-start">
                <Grid item>
                  <Link
                    to={"/login"}
                    className="text-text-decoration-underline text-primary"
                  >
                    Already have an account? Sign in
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

export default React.memo(Register);
