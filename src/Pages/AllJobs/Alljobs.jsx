import { useLoaderData } from "react-router-dom";
import AllJobsCard from "./AllJobsCard";

const Alljobs = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <h1 className="text-center text-3xl">All Jobs: {jobs.length} </h1>
      <div className="grid grid-cols-3 gap-5">
        {jobs.map((job) => (
          <AllJobsCard key={job._id} job={job}></AllJobsCard>
        ))}
      </div>
    </div>
  );
};

export default Alljobs;
