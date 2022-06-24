import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Divider,
  Dropdown,
  Grid,
  Icon,
  Image,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";

import { getJobDetails } from "../fetchs/jobFetchs";

const JobDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getJobDetails(id).then((details) => {
      setDetails(details);
    });
  }, []);

  return (
    <Container>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column float="left" width="10">
            {details !== undefined ? (
              <div>
                <div style={{ paddingTop: "3rem" }}>
                  <h4 style={{ color: "grey" }}>
                    {details.type} / {details.location}
                  </h4>
                  <h2 style={{ color: "#464349", fontWeight: "bold" }}>
                    {details.title}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: details.description,
                    }}
                  ></div>
                </div>
                <Divider />
              </div>
            ) : (
              <></>
            )}
          </Grid.Column>
          <Grid.Column float="right" width="6">
            {details !== undefined ? (
              <Card style={{ position: "sticky", top: "70px" }}>
                <Card.Content header={details.company} textAlign="center" />
                <Card.Content extra>
                  <Image
                    src="https://mms.businesswire.com/media/20190520005826/en/722805/2/SWEETRUSH_LOGO_fullcolor.jpg"
                    size="large"
                    style={{ paddingBottom: "1rem" }}
                  />
                  <a href={details.company_url} style={{ color: "blue" }}>
                    {details.company_url}
                  </a>
                </Card.Content>
                <Card.Content
                  header="How to Apply"
                  textAlign="left"
                  style={{ fontSize: 10 }}
                />
                <Card.Content extra>
                  <div
                    style={{ color: "black", fontWeight: "bold" }}
                    dangerouslySetInnerHTML={{
                      __html: details.how_to_apply,
                    }}
                  ></div>
                </Card.Content>
              </Card>
            ) : (
              <></>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default JobDetailsPage;
