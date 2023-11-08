/* eslint-disable react/prop-types */
// import React from 'react';


import { Link } from "react-router-dom";

const Row = ({job}) => {
    const {_id, title,category,salary,deadline,jobApplicant} = job;
    
    return (
        <tr>
        <td>{title}</td>
        <td>{category}</td>
        <td>{salary} USD</td>
        <td>{deadline}</td>
        <td>{jobApplicant}</td>
        <th>
        {/* <Link to={`updateCar/${_id}`}> */}
          <Link to={`updateJob/${_id}`}><button className="btn btn-neutral btn-xs mr-3">Update</button></Link>
          <button className="btn btn-error text-white btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default Row;