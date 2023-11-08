import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Row from "./Row";
import PageTitle from "../../components/PageTitle";
import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  // const [myJobs, setMyJobs] = useState([]);

  // const { id } = useParams();

  // const JobsDetails = cartInfo.filter((cartInfo) => cartInfo.user === user);

  // const [myJobsDetails, setMyJobsDetails] = useState(myJobs);

  // console.log(myJobs);

  const url = `https://job-hunter-server-nine.vercel.app/api/v1/my/jobs?userEmail=${user?.email}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setMyJobs(data));
  // }, [url]);

  // Queries
  const { data = [], refetch } = useQuery({
    queryKey: ["jobs", user?.email],
    queryFn: async () => {
      const data = await fetch(url);
      return await data.json();
    },
  });
  console.log(data);

  return (
    <div>
      <PageTitle title="JobHunter | MyJob" />
      <h1 className="text-5xl text-center font-bold underline">Your Added Jobs: {data.length}</h1>
      <div className="overflow-x-auto my-10">
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
            {data.map((job) => (
              <Row key={job._id} job={job} refetch={refetch}></Row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
