import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Row from "./Row";
import PageTitle from "../../components/PageTitle";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const [myJobs, setMyJobs] = useState([]);

  const url = `http://localhost:5000/api/v1/my/jobs?userEmail=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyJobs(data));
  }, [url]);

  // Queries
  // const { data } = useQuery({
  //   queryKey: ["jobs"],
  //   queryFn: async () => {
  //     const data = await fetch(url);
  //     return await data.json();
  //   },
  // });
  // console.log(data);
  

  return (
    <div>
      <PageTitle title="JobHunter | MyJob" />
      <h1 className="text-5xl text-center font-bold underline">Your Added Jobs: {myJobs.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Job Category</th>
              <th>Salary</th>
              <th>DeadLine</th>
              <th>Applicant</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myJobs.map((job) => (
              <Row key={job._id} job={job}></Row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
