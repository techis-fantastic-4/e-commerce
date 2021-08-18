import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../reducks/user/selectors";

const Footer = () => {
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  return (
    <footer>
      <div class="menu">
        <div class="menu-list">
          <div class="sub-title">Shop and Learn</div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            {user.token ? (
              <li>
                <a href="/signout">Sign Out</a>
              </li>
            ) : (
              <div>
                <li>
                  <a href="/signin">Sign In</a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div class="menu-list">
          <div class="sub-title">Support</div>
          <ul>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
