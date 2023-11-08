import { useContext, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateJobs = () => {
    const { user } = useContext(AuthContext);
  //for datepicker
  const [selectDate, setSelectDate] = useState(null);

  const jobDetails = useLoaderData();
  
  const {_id} = jobDetails;

  const handleUpdateJob = (e) => {
    e.preventDefault();

    const form = e.target;

    const comName = form.comName.value;
    const comimg = form.comimg.value;
    const bannerUrl = form.bannerUrl.value;
    const title = form.title.value;
    const category = form.category.value;
    const salary = form.salary.value;
    const deadline = form.deadline.value;
    const description = form.description.value;

    // const comName = form.get("comName");
    // const comimg = form.get("comimg");
    // const bannerUrl = form.get("bannerUrl");
    // const title = form.get("title");
    // const userName = user?.displayName;
    // const userEmail = user?.email;
    // const category = form.get("category");
    // const salary = form.get("salary");
    // const deadline = form.get("deadline");
    // const description = form.get("description");
    // const today = new Date();
    // const day = String(today.getDate()).padStart(2, "0");
    // const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    // const year = today.getFullYear();

    // const postedDate = `${day}/${month}/${year}`;
    // const postedDate = today;


    const updateJob = { comName, comimg, bannerUrl, title, category, salary, deadline, description };

    //send data to the server http://localhost:5000/api/v1/job/update/654a6fcf9da4c6aef46246e5
    fetch(`http://localhost:5000/api/v1/job/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Updated Successfuly Updated",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });


    console.log(updateJob);
  };
    return (
        <div>
            <PageTitle title="JobHunter | UpdateJob"/>
      <h2 className="text-3xl font-bold text-center">Update Job</h2>
      <form onSubmit={handleUpdateJob} className="card-body lg:w-9/12 md:h-3/4 mx-auto border my-5">
        <div className="flex gap-3">
          <div className="w-1/2">
            <input type="text" name="comName" defaultValue={jobDetails.comName} required id="" className="input input-bordered bg-[#F2F2F2] w-full" />
          </div>
          <div className="w-1/2">
            <input type="text" name="comimg" defaultValue={jobDetails.comimg} className="input input-bordered bg-[#F2F2F2] w-full" id="" required />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-1/2">
            <input type="text" name="bannerUrl" defaultValue={jobDetails.bannerUrl} required id="" className="input input-bordered bg-[#F2F2F2] w-full" />
          </div>
          <div className="w-1/2">
            <input type="text" name="title" defaultValue={jobDetails.title} className="input input-bordered bg-[#F2F2F2] w-full" id="" required />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-1/2">
            <input
              type="text"
              name="userName"
              defaultValue={user?.displayName}
              required
              id=""
              className="input input-bordered bg-[#F2F2F2] w-full"
              readOnly
            />
          </div>
          <div className="w-1/2">
            <select name="category" id="" defaultValue={jobDetails.category} className="input input-bordered bg-[#F2F2F2] w-full" required>
              <option>Select One</option>
              <option value="On Site Job">On Site Job</option>
              <option value="Remote Job">Remote Job</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-1/2">
            <input type="number" name="salary" defaultValue={jobDetails.salary} required id="" className="input input-bordered bg-[#F2F2F2] w-full" />
          </div>
          <div className="w-1/2">
            <DatePicker
              placeholderText="DeadLine"
              className="input input-bordered bg-[#F2F2F2] w-full"
              name="deadline" required
              selected={selectDate}
              onChange={(date) => setSelectDate(date)}
              minDate={new Date()}
              defaultValue={jobDetails.deadline}
            ></DatePicker>
          </div>
        </div>
        <div className="">
          <div className="w-full">
            <textarea className="textarea textarea-bordered bg-[#F2F2F2] w-full" defaultValue={jobDetails.description} name="description" required></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#065af7] text-white font-bold text-xl w-1/2 mx-auto ">Add</button>
        </div>
      </form>
        </div>
    );
};

export default UpdateJobs;