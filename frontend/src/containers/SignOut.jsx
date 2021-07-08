import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { signOut } from "../reducks/user/operations";

const SignOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, []);
  return (
    <div class="form">
      <h2>SIGN OUT</h2>
    </div>
  );
};

export default SignOut;
