import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import PaginationComponent from "../components/PaginationComponent";
import { Divider, Header } from "semantic-ui-react";

import NavBar from "../components/NavBar";
import SearchFilter from "../components/SearchFilter";

import { getJobList } from "../fetchs/jobFetchs";

const JobListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

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
      <NavBar />
      <div style={{ paddingTop: 20, paddingLeft: 30 }}>
        <SearchFilter />
      </div>
      <div style={{ paddingLeft: 15, paddingRight: 15 }}>
        <Header as="h3" style={{ paddingTop: 20 }}>
          Job List
        </Header>
      </div>
      <Divider />
      <div style={{ paddingLeft: 15, paddingRight: 15 }}>
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

export default JobListPage;
