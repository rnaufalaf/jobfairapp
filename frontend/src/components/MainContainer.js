import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { Button, Card, Divider, Header, Image } from "semantic-ui-react";

import { getJobList } from "../fetchs/jobFetchs";

const MainContainer = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobList().then((jobs) => {
      setJobs(jobs);
    });
  }, []);

  return (
    <div>
      <div>
        <Header as="h3" style={{ paddingTop: 20 }}>
          Job List
        </Header>
      </div>
      <Divider />
      <div>
        {jobs.length !== 0 ? (
          jobs.map((job, index) => {
            return <CardComponent jobs={job} key={index} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MainContainer;
