// import React from 'react';

import PageTitle from "../../components/PageTitle";
import Banner from "./Banner";
import JobCartegory from "./JobCartegory";

const Home = () => {
  return (
    <div>
      <PageTitle title="JobHunter | Home"/>
      <Banner></Banner>
      <JobCartegory></JobCartegory>
    </div>
  );
};

export default Home;
