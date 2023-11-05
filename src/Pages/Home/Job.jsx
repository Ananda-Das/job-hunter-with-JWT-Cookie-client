/* eslint-disable react/prop-types */

const Job = ({ job }) => {
  const { NameWhoPosted, JobTitle, JobCategory, JobPostingDate, ApplicationDeadline, SalaryRange, JobApplicantsNumber } = job;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        {/* <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">Job Title: {JobTitle}</h2>
          <p className="text-base"><span className="font-bold">Posted: </span>{NameWhoPosted}</p>
          <p className="text-base"><span className="font-bold">Job Category: </span>{JobCategory}</p>
          <p className="text-base"><span className="font-bold">Job Posting Date: </span>{JobPostingDate}</p>
          <p className="text-base"><span className="font-bold">Application DeadLine: </span>{ApplicationDeadline}</p>
          <p className="text-base"><span className="font-bold">Salary Range: </span>{SalaryRange}</p>
          <p className="text-base"><span className="font-bold">Job Applicants Number: </span>{JobApplicantsNumber}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
