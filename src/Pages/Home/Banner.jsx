// import React from 'react';

const Banner = () => {
  return (
    <div className="bg-[url('https://hijobs.e-plugins.com/wp-content/uploads/2023/06/home-banner-bg.jpg')] bg-cover bg-no-repeat h-screen mb-14">
      <div className="flex gap-5 pt-16 px-10 items-center justify-between">
        <div className="ml-5">
          <p className="text-xl">We delivered blazing fast work Solution</p>
          <h1 className="text-7xl font-extrabold">
            Find & Hire Top <br /> 3% of expert on hi’Jobs.
          </h1>
          <div className="mt-7 ml-5">
            <input className="rounded-lg mr-2 p-3 border" placeholder="Search Jobs..." type="text" name="" id="" />
            <button className="bg-[#0859F7] hover:bg-[#0F2239] rounded-lg text-white btn">Search</button>
          </div>
        </div>
        <div>
          <img className="w-[93%]" src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/banner-right-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
