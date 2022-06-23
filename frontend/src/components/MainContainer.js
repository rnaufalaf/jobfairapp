import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import PaginationComponent from "./PaginationComponent";
import { Button, Card, Divider, Header, Image } from "semantic-ui-react";

import { getJobList } from "../fetchs/jobFetchs";

const MainContainer = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);

  useEffect(() => {
    getJobList().then((jobs) => {
      setJobs(jobs);
    });
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div>
        <Header as="h3" style={{ paddingTop: 20 }}>
          Job List
        </Header>
      </div>
      <Divider />
      <div>
        {currentJobs.length !== 0 ? (
          currentJobs.map((job, index) => {
            return <CardComponent jobs={job} key={index} />;
          })
        ) : (
          <></>
        )}
      </div>
      <div class="py-5">
        <PaginationComponent
          currentPage={currentPage}
          jobsPerPage={jobsPerPage}
          totalJobs={jobs.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default MainContainer;
