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
      </tr>
    );
};

export default Row;