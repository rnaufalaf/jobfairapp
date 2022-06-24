import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import PaginationComponent from "../components/PaginationComponent";
import {
  Divider,
  Header,
  Button,
  Checkbox,
  Grid,
  Icon,
} from "semantic-ui-react";

import { getJobList } from "../fetchs/jobFetchs";

import { useNavigate } from "react-router-dom";

const JobListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  const [term, setTerm] = useState(null);
  const [city, setCity] = useState(null);
  const [type, setType] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth");
    }
  });

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
      <div style={{ paddingTop: 20, paddingLeft: 30 }}>
        <Grid divided="vertically">
          <Grid.Row columns={4}>
            <Grid.Column>
              <h4 style={{ paddingLeft: 10 }}>Search By Title</h4>
              <div class="input-group">
                <div class="form-outline">
                  <input
                    type="search"
                    class="form-control"
                    onChange={(event) => setTerm(event.target.value)}
                  />
                </div>
                <button type="button" class="btn btn-primary">
                  <Icon name="search" />
                </button>
              </div>
            </Grid.Column>
            <Grid.Column>
              <h4 style={{ paddingLeft: 10 }}>Search By City</h4>
              <div class="input-group">
                <div class="form-outline">
                  <input
                    type="search"
                    id="form1"
                    class="form-control"
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
                <button type="button" class="btn btn-primary">
                  <Icon name="search" />
                </button>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Checkbox
                style={{ paddingTop: 40 }}
                label="Fulltime"
                onChange={() => setType("Full")}
              />
            </Grid.Column>
            <Grid.Column>
              <Button
                primary
                style={{ marginTop: 30 }}
                onClick={() =>
                  navigate(`/jobs/list/search/${term}/${city}/${type}`)
                }
              >
                Search
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
