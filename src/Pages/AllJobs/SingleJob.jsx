import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
// import Swal from "sweetalert2";

const SingleJob = () => {
  const jobDetials = useLoaderData();

  const { id } = useParams();

  console.log(id);

  const { user } = useContext(AuthContext);

  const singleJobDetails = jobDetials.find((jobDetials) => jobDetials._id === id);

  const { comimg, comName, bannerUrl, title, userName, category, salary, deadline, description, userEmail, jobApplicant } = singleJobDetails;

  const handleApply = (e) => {
    // e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = user?.displayName;
    const email = user?.email;
    const jobId = id;
    const comName = singleJobDetails?.comName;
    const title = singleJobDetails?.title;
    const category = singleJobDetails?.category;
    const salary = singleJobDetails?.salary;
    const jobApplicant = singleJobDetails?.jobApplicant;

    // console.log(jobId);
    const cvlink = form.get("cvlink");

    const applyjob = { name, email, cvlink, jobId, comName, title, category, salary, jobApplicant };

    //check date
    const currentDate = Date.now();
    // const formattedDate = new Date(currentDate).toLocaleDateString('en-GB');
    // console.log(formattedDate);
    // const dateInMilliseconds = deadline.getTime();

    const deadlinePassed = currentDate > new Date(deadline).getTime();
    // const deadlinePassed = new Date(dateInMilliseconds).getTime() < currentDate;
    // const deadlinePassed = new Date(deadline).getTime() < formattedDate;
    console.log(deadlinePassed);
    console.log(deadline);
    //check post user and apply job user
    const emailMatch = user?.email === userEmail;

    if (emailMatch) {
      toast.error("You Cann't Apply Your Own Job");
      console.log("You Cann't Apply Your Own Job");
    } else if (deadlinePassed) {
      toast.error("Sorry Application Deadline is Over");
    } else {
      //send data to the server
      fetch(`https://job-hunter-server-nine.vercel.app/api/v1/apply/jobs/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(applyjob),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.result.insertedId) {
            toast.success("Thank you for apply");
          }
        });

      console.log(applyjob);
    }
  };

  return (
    <div className="my-14">
      <div className="h-96 w-full relative">
        <img className="h-full w-full object-cover rounded-lg" src={bannerUrl} alt="" />
      </div>
      <div className="w-3/4 mx-auto card-body bg-gray-100 rounded-2xl border-4 relative bottom-[100px]">
        <div className="flex justify-between items-center border-b-4 border-blue-400">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16">
              <img src={comimg} alt="" />
            </div>
          <div className="card-body ">
            <p>{comName}</p>
            <h1 className="text-3xl font-bold">{title}</h1>
            <h3>Job Posted By: {userName}</h3>
          </div>
          </div>
          <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="ml-5 btn btn-info" onClick={() => document.getElementById("my_modal_1").showModal()}>
              Apply Now
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-center my-3">Job Apply Form</h3>
                <form onSubmit={handleApply} className="my-3" method="dialog">
                  <div className="flex gap-3">
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        required
                        id=""
                        className="input input-bordered bg-[#F2F2F2] w-full"
                        readOnly
                      />
                    </div>
                    <div className="w-1/2">
                      <input
                        type="text"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                        className="input input-bordered bg-[#F2F2F2] w-full"
                        id=""
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <input
                      type="text"
                      name="cvlink"
                      placeholder="Please Insert your resume link"
                      className="input input-bordered bg-[#F2F2F2] w-full"
                      id=""
                      required
                    />
                  </div>
                  <button className="btn btn-info mt-3 w-full">Apply</button>
                </form>

                {/* <div className="modal-action">
                  <form >
                    if there is a button in form, it will close the modal
                    <button className="btn">Close</button>
                  </form>
                </div> */}
              </div>
            </dialog>
          </div>
        </div>
        <div className="flex items-center justify-around text-base pl-3">
          <p>
            <span className="font-bold">Category:</span> {category}
          </p>
          <p>
            <span className="font-bold">Salary :</span> $ {salary}
          </p>
          <p>
            <span className="font-bold">Job Applicants:</span> {jobApplicant}
          </p>
          <p>
            DeadLine: <span className="font-bold">{deadline}</span>
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold">Job Description:</h2>
        <p className="ml-12">{description}</p>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default SingleJob;
