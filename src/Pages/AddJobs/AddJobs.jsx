import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import PageTitle from "../../components/PageTitle";

const AddJobs = () => {
  const { user } = useContext(AuthContext);
  //for datepicker
  const [selectDate, setSelectDate] = useState(null);

  const handleAddJob = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const bannerUrl = form.get("bannerUrl");
    const title = form.get("title");
    const userName = user?.displayName;
    const userEmail = user?.email;
    const category = form.get("category");
    const salary = form.get("salary");
    const deadline = form.get("deadline");
    const description = form.get("description");
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const year = today.getFullYear();

    const postedDate = `${day}/${month}/${year}`;

    const jobApplicant = 0;

    const jobs = { bannerUrl, title, userName, category, salary, deadline, description, postedDate, jobApplicant, userEmail };

    //send data to the server
    fetch("http://localhost:5000/api/v1/add/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Successfuly Inserted",
            icon: "success",
            confirmButtonText: "Okay",
          });
          // form.reset();
          // alert('inserted');
        }
      });

    console.log(jobs);
  };

  return (
    <div>
      <PageTitle title="JobHunter | AddJob"/>
      <h2 className="text-3xl font-bold text-center">Add A Job</h2>
      <form onSubmit={handleAddJob} className="card-body lg:w-9/12 md:h-3/4 mx-auto border my-5">
        <div className="flex gap-3">
          <div className="w-1/2">
            <input type="text" name="bannerUrl" placeholder="Job Banner Url" required id="" className="input input-bordered bg-[#F2F2F2] w-full" />
          </div>
          <div className="w-1/2">
            <input type="text" name="title" placeholder="Title" className="input input-bordered bg-[#F2F2F2] w-full" id="" required />
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
            <select name="category" id="" className="input input-bordered bg-[#F2F2F2] w-full" required>
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
            <input type="number" name="salary" placeholder="Job Salary" required id="" className="input input-bordered bg-[#F2F2F2] w-full" />
          </div>
          <div className="w-1/2">
            <DatePicker
              placeholderText="DeadLine"
              className="input input-bordered bg-[#F2F2F2] w-full"
              name="deadline"
              selected={selectDate}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => setSelectDate(date)}
              minDate={new Date()}
            ></DatePicker>
          </div>
        </div>
        <div className="">
          <div className="w-full">
            <textarea className="textarea textarea-bordered bg-[#F2F2F2] w-full" placeholder="Job Description" name="description"></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#065af7] text-white font-bold text-xl w-1/2 mx-auto ">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;
