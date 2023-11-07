
import AllJobsCard from "./AllJobsCard";
import PageTitle from "../../components/PageTitle";
// import useJobs from "../../hooks/useJobs";
// import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const Alljobs = () => {
  const jobs = useLoaderData();
  // const { data,isLoading } = useQuery({
  //   queryKey: ["jobs"],
  //   queryFn: async () => {
  //     const data = await fetch("http://localhost:5000/api/v1/all/jobs");
  //     return await data.json();
  //   },
  // });
  // const { data } =  useJobs();
  // console.log(data, isLoading);

  return (
    <div>
      <PageTitle title="JobHunter | AllJobs" />
      {/* <h1 className="text-center text-3xl">All Jobs: {data.length} </h1> */}
      <h1 className="text-center text-3xl">All Jobs: {jobs.length} </h1>
      <div className="grid grid-cols-2 gap-5">
        {jobs.map((job) => (
          <AllJobsCard key={job._id} job={job}></AllJobsCard>
        ))}
      </div>
    </div>
  );
};

export default Alljobs;
