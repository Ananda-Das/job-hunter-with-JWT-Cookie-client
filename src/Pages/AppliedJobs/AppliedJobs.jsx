import { useContext, useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { AuthContext } from "../../Providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const url = `http://localhost:5000/api/v1/my/applied/jobs?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppliedJobs(data));
  }, [url]);
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
    </div>
  );
};

export default AppliedJobs;
