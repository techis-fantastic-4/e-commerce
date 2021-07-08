import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { signIn } from "../reducks/user/operations";

const SignIn = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signInButton = () => {
    dispatch(signIn(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div class="form">
      <h2>SIGN IN</h2>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control" onChange={inputEmail} placeholder="Enter email" value={email} required />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" onChange={inputPassword} placeholder="Password" value={password} required />
      </div>
      <button type="submit" class="btn btn-primary" onClick={signInButton}>
        Sign In
      </button>
      <br />
      <a href="/signup">Have an Account? Sign Up</a>
    </div>
  );
};

export default SignIn;
