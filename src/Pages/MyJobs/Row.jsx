/* eslint-disable react/prop-types */
// import React from 'react';

const Row = ({job}) => {
    const {title,category,salary,deadline,jobApplicant} = job;
    return (
        <tr>
        <td>{title}</td>
        <td>{category}</td>
        <td>{salary}</td>
        <td>{deadline}</td>
        <td>{jobApplicant}</td>
        <th>
          <button className="btn btn-neutral btn-xs mr-3">Update</button>
          <button className="btn btn-error text-white btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default Row;