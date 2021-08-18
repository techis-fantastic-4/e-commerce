import React, { useEffect, useState } from "react";
import Loading from "../assets/img/loading.gif";
import API from "../API";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../reducks/user/selectors";
import { push } from "connected-react-router";
import { signOutAction } from "../reducks/user/actions";

const api = new API();

const UserList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (user.token != "") {
      api
        .getUsers(user.token)
        .then((users) => {
          setUsers(users);
        })
        .catch((error) => {
          alert("Failed to connect API: /users/");
          dispatch(push("/"));
        });
    }
  }, [user]);

  return (
    <div className="form">
      <h2>User List</h2>
      <p>This page is just getting the user data to demonstrate how to add auth token to API request.</p>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li>User Name: {user.user_name}</li>
          ))}
        </ul>
      ) : (
        <div className="loading">
          <img src={Loading} className="" />
        </div>
      )}
    </div>
  );
};

export default UserList;
