import { useLoaderData, useParams } from "react-router-dom";

const SingleJob = () => {
  const jobDetials = useLoaderData();

  const { id } = useParams();

  const singleJobDetails = jobDetials.find((jobDetials) => jobDetials._id === id);

  const { bannerUrl, title, userName, category, salary, deadline, description, jobApplicant } = singleJobDetails;

  return (
    <div className="my-14">
      <div className="h-96 w-full relative">
        <img className="h-full w-full object-cover rounded-lg" src={bannerUrl} alt="" />
      </div>
      <div className="w-3/4 mx-auto card-body bg-gray-100 rounded-2xl border-4 relative bottom-[100px]">
        <div className="flex justify-around items-center border-b-4 border-blue-400">
          <div className="card-body ">
            <h1 className="text-3xl font-bold">{title}</h1>
            <h3>Job Posted By: {userName}</h3>
          </div>
          <div>
            {/* <button className="btn btn-active">Save</button> */}
            <button className="ml-5 btn btn-info">Apply Now</button>
          </div>
        </div>
        <div className="flex items-center justify-around text-base pl-3">
          <p><span className="font-bold">Category:</span> {category}</p>
          <p><span className="font-bold">Salary :</span> $ {salary}</p>
          <p><span className="font-bold">Job Applicants:</span> {jobApplicant}</p>
          <p>DeadLine: <span className="font-bold">{deadline}</span></p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Job Description:</h2>
        <p className="ml-12">{description}</p>
      </div>
    </div>
  );
};

export default SingleJob;
