/* eslint-disable react/prop-types */

const Row = ({ appliedJob }) => {
  const { title, category, salary, jobApplicant } = appliedJob;
  return (
    <tr>
      <td>{title}</td>
      <td>{category}</td>
      <td>{salary} USD</td>
      <td>{jobApplicant}</td>
    </tr>
  );
};

export default Row;
