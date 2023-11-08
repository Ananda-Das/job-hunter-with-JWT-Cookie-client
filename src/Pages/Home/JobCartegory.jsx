import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaAngleDoubleRight } from "react-icons/fa";

import "react-tabs/style/react-tabs.css";
import Job from "./Job";
import { NavLink } from "react-router-dom";
import axios from "axios";

const JobCartegory = () => {
  const [jobs, setjobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const url = "https://job-hunter-server-nine.vercel.app/api/v1/all/jobs";
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setjobs(data);
    //     setDisplayJobs(data);
    //   });
    axios.get(url, { withCredentials: true }).then((res) => {
      setjobs(res.data);
      setDisplayJobs(res.data);
    });
  }, []);

  const handleFilterJobs = (filter) => {
    if (filter === "Hybrid") {
      const hybridJobs = jobs.filter((job) => job.category === "Hybrid");
      setDisplayJobs(hybridJobs);
    } else if (filter === "Part Time") {
      const partTimeJobs = jobs.filter((job) => job.category === "Part Time");
      setDisplayJobs(partTimeJobs);
    } else if (filter === "Remote") {
      const remoteJobs = jobs.filter((job) => job.category === "Remote Job");
      setDisplayJobs(remoteJobs);
    } else if (filter === "On Site") {
      const onSiteJobs = jobs.filter((job) => job.category === "On Site Job");
      setDisplayJobs(onSiteJobs);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold text-[#0F2239] my-5">Our Most Demanding Category </h2>
        <NavLink className="text-[#0859F7] font-medium text-2xl underline inline-block">
          Explore All Jobs <FaAngleDoubleRight className="inline-block"></FaAngleDoubleRight>
        </NavLink>
      </div>
      <Tabs>
        <TabList className="flex gap-5 justify-center my-5">
          <Tab>ALL</Tab>
          <Tab onClick={() => handleFilterJobs("Part Time")}>Part Time</Tab>
          <Tab onClick={() => handleFilterJobs("Remote")}>Remote</Tab>
          <Tab onClick={() => handleFilterJobs("On Site")}>On Site</Tab>
          <Tab onClick={() => handleFilterJobs("Hybrid")}>Hybrid</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-2 gap-5">
            {jobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-5">
            {displayJobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-5">
            {displayJobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-5">
            {displayJobs.map((job) => (
              <Job key={job._id} job={job}></Job>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 gap-5">
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
