import { useContext, useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import Row from "./Row";
import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [alljobs, setAllJobs] = useState([]);

  const url = `http://localhost:5000/api/v1/my/applied/jobs?email=${user?.email}`;
  // const url = `http://localhost:5000/api/v1/my/applied/jobs?email=dsf@fdsal.com`;
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setAppliedJobs(data));

      axios.get(url, { withCredentials: true }).then((res) => {
        setAppliedJobs(res.data);
        
      });
  }, [url]);

  //for all jobs 
  useEffect(()=>{
    fetch('http://localhost:5000/api/v1/all/jobs')
    .then(res=>res.json())
    .then(data=>setAllJobs(data))
  },[])

  console.log(alljobs.map(alljob=> {
    if(alljob._id===appliedJobs._id){
      console.log('object');
    }
  }));

  // const singleJob = alljobs.filter()

  // Queries
  //   const { data } = useQuery({
  //     queryKey: ["jobs"],
  //     queryFn: async () => {
  //       const data = await fetch(url);
  //       return await data.json();
  //     },
  //   });
  //   console.log(data);

  return (
    <div>
      <PageTitle title="JobHunter | Applied" />
      <h1 className="text-5xl text-center font-bold underline">Your Applied Jobs: {appliedJobs.length}</h1>
      {/* <h1 className="text-5xl text-center font-bold underline">Your Applied Jobs: {data.length}</h1> */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
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
