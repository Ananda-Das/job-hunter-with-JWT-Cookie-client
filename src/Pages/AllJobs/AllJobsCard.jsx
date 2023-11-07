/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllJobsCard = ({ job }) => {
  const { _id, comName, comimg, title, userName, category, salary, deadline, postedDate, jobApplicant } = job;
  return (
    <div className="my-4">
      <div className="card-body border-2 rounded-2xl">
        {/* <h2 className="card-title">Job Title: {title}</h2>
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
        </div> */}
        <div className="flex pb-3 border-b-2 justify-between">
          <div className="flex gap-7 items-center ">
            <div className="w-16 h-16">
              <img src={comimg} alt="" />
            </div>
            <div>
              <p className="text-[#0859F7] text-base">{comName}</p>
              <h2 className="font-bold text-3xl">{title}</h2>
            </div>
          </div>
          <div className="ml-[125px]">
            {/* <button className="btn btn-info">Details</button> */}
            <Link to={`${_id}`} >
            <button className="btn btn-info">Details</button>
          </Link>
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center border-b-2 pb-3 text-base">
          <div>
            <button className="btn">{category}</button>
          </div>
          <div>
            <p>
              <span className="font-bold">Added By:</span> {userName}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Job Applied:</span> {jobApplicant} Person
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p>$ {salary}.00 USD</p>
          </div>
          <div>
          <p>
              <span className="font-bold">Post Date: </span>
              <span className="font-bold text-green-400">{postedDate}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">DeadLine: </span>
              <span className="font-bold text-red-600">{deadline}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobsCard;
