/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Row = ({ job, refetch }) => {
  const { _id, title, category, salary, deadline, jobApplicant } = job;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/api/v1/jobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Cart has been Removed.", "success");
              // const remaining = myJobsDetails.filter(car => car._id !== _id);
              // setMyJobsDetails(remaining);
              // console.log(remaining);
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>{salary} USD</td>
      <td>{deadline}</td>
      <td>{jobApplicant}</td>
      <th>
        <Link to={`updateJob/${_id}`}>
          <button className="btn btn-neutral btn-xs mr-3">Update</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn btn-error text-white btn-xs">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default Row;
