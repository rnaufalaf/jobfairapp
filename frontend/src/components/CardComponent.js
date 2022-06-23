import React from "react";
import { Card, Header } from "semantic-ui-react";

const CardComponent = (props) => {
  const { jobs } = props;
  return (
    <Card.Group>
      <Card fluid color="green">
        <Card.Content>
          <Header as="h4" color="green" floated="right">
            {jobs.type}
          </Header>
          <Card.Header>{jobs.title}</Card.Header>
          <Card.Description>
            <h4 style={{ color: "black", paddingTop: 5 }}>
              <strong>{jobs.company}</strong>
            </h4>
          </Card.Description>
          <Card.Meta>
            <h5 style={{ color: "grey", paddingTop: 3 }}>{jobs.location}</h5>
          </Card.Meta>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default CardComponent;
