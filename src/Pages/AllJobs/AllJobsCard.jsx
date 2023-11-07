/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllJobsCard = ({ job }) => {
  const { _id, title, userName, category, salary, deadline, postedDate, jobApplicant } = job;
  return (
    <div className="my-4">
      <div className="card-body border-2 rounded-2xl">
        <h2 className="card-title">Job Title: {title}</h2>
        <p className="text-base">
          <span className="font-bold">Posted: </span>
          {userName}
        </p>
        <p className="text-base">
          <span className="font-bold">Job Category: </span>
          {category}
        </p>
        <p className="text-base">
          <span className="font-bold">Job Posting Date: </span>
          {postedDate}
        </p>
        <p className="text-base">
          <span className="font-bold">Application DeadLine: </span>
          {deadline}
        </p>
        <p className="text-base">
          <span className="font-bold">Salary Range: </span>
          {salary}
        </p>
        <p className="text-base">
          <span className="font-bold">Job Applicants Number: </span>
          {jobApplicant}
        </p>
        <div className="card-actions justify-end">
          <Link to={`${_id}`} >
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllJobsCard;
