const About = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-2 items-center justify-around">
        <div>
          <img src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/image-1.jpg" alt="" />
        </div>
        <div className="space-y-5">
          <p className="text-[#0859F7] text-base uppercase">MORE ABOUT OUR COMPANY</p>
          <h1 className="text-5xl font-medium text-[#0F2239]">World’s of talent at your fingertips</h1>
          <p className="text-[#7A7A7A]">
            Synergistically visualize alternative content before cross functional core Rapidiously administra standardized value via focused benefits.
            Rapidly redefine highly efficient niche markets with plug-and-play materials professionally
          </p>
          <div className="flex gap-5">
            <div>
              <h2 className="text-[#0F2239] text-2xl">Perfect Search Lists</h2>
              <p className="text-[#6A7179] text-base">Seamlessly envisioneer tactical data through services.</p>
            </div>
            <div>
              <h2 className="text-[#0F2239] text-2xl">Experts Employees</h2>
              <p className="text-[#6A7179] text-base">Seamlessly envisioneer tactical data through services.</p>
            </div>
          </div>
          <button className="btn btn-info text-white">Click Here </button>
        </div>
      </div>
    </div>
  );
};

export default About;
