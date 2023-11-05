import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaAngleDoubleRight } from 'react-icons/fa';

import "react-tabs/style/react-tabs.css";
import Job from "./Job";
import { NavLink } from "react-router-dom";

const JobCartegory = () => {
  const [jobs, setjobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/jobsCategory")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setjobs(data);
        setDisplayJobs(data);
      });
  }, []);

  const handleFilterJobs = (filter) => {
    if (filter === "Hybrid") {
      const hybridJobs = jobs.filter((job) => job.JobCategory === "Hybrid");
      setDisplayJobs(hybridJobs);
    } else if (filter === "Part Time") {
      const partTimeJobs = jobs.filter((job) => job.JobCategory === "Part Time");
      setDisplayJobs(partTimeJobs);
    } else if (filter === "Remote") {
      const remoteJobs = jobs.filter((job) => job.JobCategory === "Remote Job");
      setDisplayJobs(remoteJobs);
    } else if (filter === "On Site") {
      const onSiteJobs = jobs.filter((job) => job.JobCategory === "On Site Job");
      setDisplayJobs(onSiteJobs);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
      <h2 className="text-4xl font-bold text-[#0F2239] my-5">Our Most Demanding Category </h2>
      <NavLink className="text-[#0859F7] font-medium text-2xl underline inline-block">Explore All Jobs <FaAngleDoubleRight className="inline-block"></FaAngleDoubleRight></NavLink>
      </div>
      {/* <button onClick={() => handleFilterJobs('Hybrid')} className="btn btn-primary">klsdfaj</button> */}
      {/* #0859F7 */}
      <Tabs>
        <TabList className="flex gap-5 justify-center my-5">
          <Tab>ALL</Tab>
          <Tab onClick={() => handleFilterJobs("Part Time")}>Part Time</Tab>
          <Tab onClick={() => handleFilterJobs("Remote")}>Remote</Tab>
          <Tab onClick={() => handleFilterJobs("On Site")}>On Site</Tab>
          <Tab onClick={() => handleFilterJobs("Hybrid")}>Hybrid</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-5 mx-auto max-w-6xl">
            {jobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5 mx-auto max-w-6xl">
            {displayJobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5 mx-auto max-w-6xl">
            {displayJobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5 mx-auto max-w-6xl">
            {displayJobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5 mx-auto max-w-6xl">
            {displayJobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCartegory;
