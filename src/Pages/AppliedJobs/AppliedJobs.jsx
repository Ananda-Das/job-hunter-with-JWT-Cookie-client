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

  const handleFilterJobs = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Hybrid") {
      const hybridJobs = appliedJobs.filter((job) => job.category === "Hybrid");
      console.log(hybridJobs);
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

  return (
    <div>
      <PageTitle title="JobHunter | Applied" />
      <h1 className="text-5xl text-center font-bold underline">Your Applied Jobs: {appliedJobs.length}</h1>
      <div>
        {/* <form action="">
        <section className="dropdown drop-shadow">
          <option onClick={()=>handleFilterJobs('Part Time')}>Part Time</option>
          <option onClick={()=>handleFilterJobs('Remote')}>Remote</option>
          <option onClick={()=>handleFilterJobs('Hybrid')}>Part Time</option>
        </section>
        </form> */}
        {/* <form>
          <select className="select select-bordered w-full" name="brand">
            <option>Select Brand</option>
            <option onClick={() => handleFilterJobs("Part Time")}>Part Time</option>
            <option value="Ford">Ford</option>
            <option value="bmw">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Tesla">Tesla</option>
            <option value="Honda">Honda</option>
          </select>
        </form> */}
        <details className="dropdown mb-32">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilterJobs("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilterJobs("Part Time")}>
              <a>Part Time</a>
            </li>
            <li onClick={() => handleFilterJobs("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilterJobs("Hybrid")}>
              <a>Hybrid</a>
            </li>
            <li onClick={() => handleFilterJobs("On Site")}>
              <a>On Site</a>
            </li>
          </ul>
        </details>
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
