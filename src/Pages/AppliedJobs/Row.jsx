/* eslint-disable react/prop-types */

// import { useEffect, useState } from "react";

const Row = ({ appliedJob }) => {

  const { comName, title, category, salary, jobApplicant } = appliedJob;



  return (
    <tr>
      <td>{comName}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>{salary}</td>
      <td>{jobApplicant}</td>
    </tr>
  );
};

export default Row;
