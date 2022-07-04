import React, { useState } from "react";
import { WrapperCenter, Column, Row } from "../../styles";
import Swal from "sweetalert2";

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = "user@company.com";
  const adminPassword = "admin";

  const [email, setEmail] = useState("user@company.com");
  const [password, setPassword] = useState("admin");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          setIsAuthenticated(true);

          Swal.fire({
            icon: "success",
            title: "Successfully logged in!",
            showConfirmButton: false,
            timer: 2000,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Incorrect email or password.",
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <WrapperCenter>
      <form
        className="flex__mid-container direction--column max-w-520 margin-t-80"
        onSubmit={handleLogin}
      >
        <p>Security Placeholder</p>
        <Column className=" layer-1">
          <label>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="user@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="qwerty"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className="justify--flex-end">
            <button
              className="button bg--blue color--white margin-t-20"
              type="submit"
              value="Login"
            >
              Login
            </button>
          </Row>
        </Column>
      </form>
    </WrapperCenter>
  );
};

export default Login;
