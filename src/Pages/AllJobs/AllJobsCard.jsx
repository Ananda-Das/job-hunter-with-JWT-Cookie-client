/* eslint-disable react/prop-types */

const AllJobsCard = ({ job }) => {
  const { title,userName, category, salary, deadline, postedDate,jobApplicant } = job;
  return (
    <div>
      <div className="card-body">
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
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllJobsCard;
