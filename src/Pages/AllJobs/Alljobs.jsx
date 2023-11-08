import AllJobsCard from "./AllJobsCard";
import PageTitle from "../../components/PageTitle";
// import useJobs from "../../hooks/useJobs";
// import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Alljobs = () => {
  const jobs = useLoaderData();
  // const { data,isLoading } = useQuery({
  //   queryKey: ["jobs"],
  //   queryFn: async () => {
  //     const data = await fetch("https://job-hunter-server-nine.vercel.app/api/v1/all/jobs");
  //     return await data.json();
  //   },
  // });
  // const { data } =  useJobs();
  // console.log(data, isLoading);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <PageTitle title="JobHunter | AllJobs" />
      <h1 className="text-center text-3xl">All Jobs: {jobs.length} </h1>
      <div className="my-7">
        <div className="w-[35%] mx-auto">
          <input
            type="text"
            name="title"
            placeholder="Please Enter Job Title to Search Jobs..."
            className="input w-full input-bordered"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {jobs
          .filter((job) => {
            if (searchTerm === "") {
              return job;
            } else if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return job;
            }
          })
          .map((job) => (
            <AllJobsCard key={job._id} job={job}></AllJobsCard>
          ))}
      </div>
    </div>
  );
};

export default Alljobs;
