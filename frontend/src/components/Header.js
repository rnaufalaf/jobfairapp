import React from "react";
import { Header, Icon } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Header as="h2" attached="top" color="blue">
      <Icon name="briefcase" />
      <Header.Content>Github Jobs</Header.Content>
    </Header>
  );
};

export default NavBar;
