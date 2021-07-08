import React from "react";

const SignUp = () => {
  return (
    <div class="form">
      <h2>SIGN UP</h2>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="email" class="form-control" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <a href="/">Have an Account? Sign In</a>
    </div>
  );
};

export default SignUp;
