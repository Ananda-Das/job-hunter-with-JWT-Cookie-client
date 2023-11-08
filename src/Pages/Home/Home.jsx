// import React from 'react';

import PageTitle from "../../components/PageTitle";
import About from "./About";
import Banner from "./Banner";
import JobCartegory from "./JobCartegory";
import Testomonial from "./Testomonial";

const Home = () => {
  return (
    <div>
      <PageTitle title="JobHunter | Home"/>
      <Banner></Banner>
      <JobCartegory></JobCartegory>
      <About></About>
      <Testomonial></Testomonial>
    </div>
  );
};

export default Home;
