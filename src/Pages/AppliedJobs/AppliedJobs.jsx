import { useContext, useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import Row from "./Row";
// import axios from "axios";
import useAxiosHooks from "../../hooks/useAxiosHooks";
// import { useQuery } from "@tanstack/react-query";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const axiosSecure = useAxiosHooks();

  const url = `/api/v1/my/applied/jobs?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setAppliedJobs(res.data);
    });
  }, [url, axiosSecure]);


  return (
    <div>
      <PageTitle title="JobHunter | Applied" />
      <h1 className="text-5xl text-center font-bold underline">Your Applied Jobs: {appliedJobs.length}</h1>
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
            {appliedJobs.map((appliedJob) => (
              <Row key={appliedJob._id} appliedJob={appliedJob}></Row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedJobs;
