import React from "react";
import { Button, Header, Icon } from "semantic-ui-react";

import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const NavBar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    Swal.fire(
      "Logout Success!",
      "You have logged out from your account",
      "success"
    );
    navigate("/auth");
  };

  return (
    <Header as="h2" attached="top" color="blue">
      <Icon name="briefcase" />
      <Header.Content>Github Jobs</Header.Content>
      <Button
        color="red"
        style={{ position: "absolute", right: 0, top: 10 }}
        onClick={logoutHandler}
      >
        Log out
      </Button>
    </Header>
  );
};

export default NavBar;
