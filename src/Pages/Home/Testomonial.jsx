// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Testomonial = () => {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-extrabold text-center underline mb-10">What People Say About us</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border-2 p-5 rounded-xl ">
            <p className="text-[#0F2239] text-lg pb-4 border-b-2">
              “According to the council supply chain professionals the council of the logistics management logistics is the process of planning,
              implanting & controlling for procedures and solving the life projects all over life boundaries and more peoples says.”
            </p>
            <div className="flex items-center gap-3 justify-between py-5">
              <div className="flex items-center gap-3">
                <img src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/person.png" alt="" />
                <div>
                  <h2 className="text-3xl">Andrew D. Smith</h2>
                  <p className="text-[#0859F7] text-base">Manager</p>
                </div>
              </div>
              <img src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-img.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 p-5 rounded-xl ">
            <p className="text-[#0F2239] text-lg pb-4 border-b-2">
              Working with Data Dynamics Inc. has been a game-changer for our business. Their expertise in data management and analytics has
              revolutionized the way we approach information. The professionalism and support from their team were exemplary
            </p>
            <div className="flex items-center gap-3 justify-between py-5">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl">James Smith</h2>
                  <p className="text-[#0859F7] text-base">CEO</p>
                </div>
              </div>
              <div className="w-16">
                <img src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-7.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 p-5 rounded-xl ">
            <p className="text-[#0F2239] text-lg pb-4 border-b-2">
              EcoTech Solutions has been a beacon of innovation and sustainability in our journey towards a greener future. Their commitment to
              eco-friendly technologies and solutions is truly commendable.
            </p>
            <div className="flex items-center gap-3 justify-between py-5">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl">Emily Johnson</h2>
                  <p className="text-[#0859F7] text-base">Assistant Director</p>
                </div>
              </div>
              <div className="w-16">
                <img src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-2 p-5 rounded-xl ">
            <p className="text-[#0F2239] text-lg pb-4 border-b-2">
            Tech Solutions Ltd has been an absolute game-changer for our business. Their innovative approach and cutting-edge solutions have significantly boosted our operational efficiency. The team professionalism and attention to detail were evident throughout.
            </p>
            <div className="flex items-center gap-3 justify-between py-5">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl">Charlotte Brown</h2>
                  <p className="text-[#0859F7] text-base">CEO</p>
                </div>
              </div>
              <div className="w-16">
                <img src="https://hijobs.e-plugins.com/wp-content/uploads/2023/07/png-transparent-logo-company-business-graphic-designer-logo-design-3d-computer-graphics-ring-company.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testomonial;
