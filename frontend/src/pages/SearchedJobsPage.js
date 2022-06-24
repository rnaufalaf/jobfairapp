import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import PaginationComponent from "../components/PaginationComponent";
import { Divider, Header } from "semantic-ui-react";

import { useNavigate, useParams } from "react-router-dom";
import { getJobList } from "../fetchs/jobFetchs";

const SearchedJobsPage = () => {
  const [jobs, setJobs] = useState([]);

  const { term, city, type } = useParams();

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

  return (
    <div>
      <div style={{ paddingLeft: 15, paddingRight: 15 }}>
        <Header as="h3" style={{ paddingTop: 20 }}>
          Job List
        </Header>
      </div>
      <Divider />
      <div style={{ paddingLeft: 15, paddingRight: 15 }}>
        {jobs.length !== 0 ? (
          term !== "null" && city !== "null" && type !== "null" ? (
            jobs
              .filter(
                (jobs) =>
                  jobs.title.toLowerCase().includes(term.toLowerCase()) &&
                  jobs.location.toLowerCase().includes(city.toLowerCase()) &&
                  jobs.type.includes(type)
              )
              .map((job, index) => {
                return <CardComponent jobs={job} key={index} />;
              })
          ) : term !== "null" && city !== "null" && type === "null" ? (
            jobs
              .filter(
                (jobs) =>
                  jobs.title.toLowerCase().includes(term.toLowerCase()) &&
                  jobs.location.toLowerCase().includes(city.toLowerCase())
              )
              .map((job, index) => {
                return <CardComponent jobs={job} key={index} />;
              })
          ) : term !== "null" && city === "null" && type === "null" ? (
            jobs
              .filter((jobs) =>
                jobs.title.toLowerCase().includes(term.toLowerCase())
              )
              .map((job, index) => {
                return <CardComponent jobs={job} key={index} />;
              })
          ) : term === "null" && city !== "null" && type === "null" ? (
            jobs
              .filter((jobs) =>
                jobs.location.toLowerCase().includes(city.toLowerCase())
              )
              .map((job, index) => {
                return <CardComponent jobs={job} key={index} />;
              })
          ) : term === "null" && city === "null" && type !== "null" ? (
            jobs
              .filter((jobs) => jobs.type.includes(type))
              .map((job, index) => {
                return <CardComponent jobs={job} key={index} />;
              })
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SearchedJobsPage;
