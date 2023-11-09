import { useContext, useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import Row from "./Row";
// import axios from "axios";
import useAxiosHooks from "../../hooks/useAxiosHooks";
// import { useQuery } from "@tanstack/react-query";
import { usePDF } from "react-to-pdf";
import { FaDownload } from "react-icons/fa";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [displayJobs, setDisplayJobs] = useState([]);

  // console.log(appliedJobs);

  const axiosSecure = useAxiosHooks();

  const url = `/api/v1/my/applied/jobs?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setAppliedJobs(res.data);
      setDisplayJobs(res.data);
    });
  }, [url, axiosSecure]);

  const handleJobs = (e) => {
    const filter = e.target.value;
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Hybrid") {
      const hybridJobs = appliedJobs.filter((job) => job.category === "Hybrid");
      setDisplayJobs(hybridJobs);
    } else if (filter === "Part Time") {
      const partTimeJobs = appliedJobs.filter((job) => job.category === "Part Time");
      setDisplayJobs(partTimeJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter((job) => job.category === "Remote Job");
      setDisplayJobs(remoteJobs);
    } else if (filter === "On Site") {
      const onSiteJobs = appliedJobs.filter((job) => job.category === "On Site Job");
      setDisplayJobs(onSiteJobs);
    }
  };

  //for pdf
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <div ref={targetRef}>
      <PageTitle title="JobHunter | Applied" />
      <h1 className="text-5xl text-center font-bold underline">Your Applied Jobs: {appliedJobs.length}</h1>
      <div className="flex items-center justify-around mt-10">
        <div className="flex gap-3 items-center">
        <p className="text-base font-bold">Search Your Applied Jobs with Category: </p>
        <select className="border pl-2 rounded-lg select-info w-full max-w-xs" onChange={handleJobs}>
            <option value="all">All</option>
            <option value="Part Time">Part Time</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On Site">On Site</option>
          </select>
        </div>

        {/* </div> */}
        {/* for pdf test  */}
        <div>
          {/* <button>Download</button> */}
          <button className="btn btn-warning" onClick={() => toPDF()}>
            Download PDF{" "}
            <span className="inline-block">
              <FaDownload></FaDownload>
            </span>{" "}
          </button>
          {/* <div ref={targetRef}>Content to be generated to PDF</div> */}
        </div>
      </div>

      <div className="overflow-x-auto my-7">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>Job Category</th>
              <th>Salary</th>
              <th>Applicant</th>
            </tr>
          </thead>
          <tbody>
            {displayJobs.map((appliedJob) => (
              <Row key={appliedJob._id} appliedJob={appliedJob}></Row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
