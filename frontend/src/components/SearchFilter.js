import React from "react";
import { Button, Checkbox, Container, Grid, Search } from "semantic-ui-react";

const SearchFilter = () => {
  return (
    <Grid divided="vertically">
      <Grid.Row columns={4}>
        <Grid.Column>
          <h4 style={{ paddingLeft: 10 }}>Search By Title</h4>
          <Search placeholder="Search..." size="small" />
        </Grid.Column>
        <Grid.Column>
          <h4 style={{ paddingLeft: 10 }}>Search By City</h4>
          <Search placeholder="Search..." size="small" />
        </Grid.Column>
        <Grid.Column>
          <Checkbox style={{ paddingTop: 40 }} label="Fulltime" />
        </Grid.Column>
        <Grid.Column>
          <Button primary style={{ marginTop: 30 }}>
            Search
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default SearchFilter;
