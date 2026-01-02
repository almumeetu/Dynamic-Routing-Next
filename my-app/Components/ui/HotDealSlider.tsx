'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// 1. Mock Data: This allows you to control the slides dynamically
const hotDealsData = [
  {
    id: 1,
    title: "Oraimo OCD-114M 1 Meter USB To Micro USB Cable",
    price: "৳5,319.00",
    image: "/assets/image/Hot Deals/hot-deal-1.png",
    rating: 5,
    reviews: 102,
    colors: ["bg-blue-100", "text-blue-600", "outline-blue-100", "bg-blue-600"],
    countdown: { days: 56, hours: 12, mins: 40, secs: 13 },
  },
  {
    id: 2,
    title: "Air Mini 2 True Wireless Earbuds",
    price: "৳16,810.00",
    image: "/assets/image/Hot Deals/hot-deal-2.png",
    rating: 2,
    reviews: 123,
    colors: ["bg-emerald-100", "text-emerald-600", "outline-emerald-100", "bg-emerald-600"],
    countdown: { days: 12, hours: 11, mins: 32, secs: 10 },
  },
  {
    id: 3,
    title: "Oraimo OCD-114M 1 Meter USB To Micro USB Cable",
    price: "৳5,319.00",
    image: "/assets/image/Hot Deals/hot-deal-1.png",
    rating: 5,
    reviews: 102,
    colors: ["bg-blue-100", "text-blue-600", "outline-blue-100", "bg-blue-600"],
    countdown: { days: 56, hours: 12, mins: 40, secs: 13 },
  },
  {
    id: 4,
    title: "Air Mini 2 True Wireless Earbuds",
    price: "৳16,810.00",
    image: "/assets/image/Hot Deals/hot-deal-2.png",
    rating: 2,
    reviews: 123,
    colors: ["bg-emerald-100", "text-emerald-600", "outline-emerald-100", "bg-emerald-600"],
    countdown: { days: 12, hours: 11, mins: 32, secs: 10 },
  },
];

const HotDeals = () => {
  return (
    <section className="hot-deal my-16 lg:my-24">
      <div className="container mx-auto relative">
        <div className="flex flex-col justify-center items-center relative">
          
          {/* Section Title */}
          <div className="flex flex-col justify-center items-center gap-1 mb-0 lg:mb-3">
            <h2 className="text-rose-600 text-3xl font-semibold">
              Exclusive & Hot Deals
            </h2>
            <p className="text-stone-500 text-sm font-normal leading-5">
              Your shortcut to the hottest discounts and limited-edition finds.
            </p>
          </div>

          {/* Swiper Container */}
          <div className="w-full relative group px-20!">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 }, 
              }}
              className="hotDealSwiper w-full"
            >
              {hotDealsData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="flex-1 h-80 inline-flex flex-col justify-end items-start w-full">
                    {/* Countdown Overlay */}
                    <div className="px-3 flex flex-col justify-start items-start gap-2 relative top-[10%] z-10">
                      <div className="justify-start text-stone-800 text-sm font-semibold leading-5">
                        Hurry Up! Offer End In:
                      </div>
                      <div className="inline-flex justify-start items-center gap-2">
                        {['Days', 'Hours', 'Mins', 'Secs'].map((unit, index) => {
                           const values = [item.countdown.days, item.countdown.hours, item.countdown.mins, item.countdown.secs];
                           return (
                            <div key={index} className="px-3 py-2 bg-gradient-to-b from-rose-500 to-rose-600 rounded-xl outline outline-1 outline-offset-[-1px] outline-rose-300 inline-flex flex-col justify-center items-center">
                              <div className="text-center justify-start text-white text-3xl font-semibold">
                                {values[index]}
                              </div>
                              <div className="text-center justify-start text-white text-xs font-normal">
                                {unit}
                              </div>
                            </div>
                           )
                        })}
                      </div>
                    </div>

                    {/* Product Card Content */}
                    <div className={`self-stretch ${item.colors[0]} rounded-xl inline-flex justify-start items-center relative overflow-hidden`}>
                      <div className="flex-1 px-4 pt-4 pb-3 xl:px-12 xl:pt-20 xl:pb-12 inline-flex flex-col justify-center items-start gap-3 z-10">
                        <div className="self-stretch flex flex-col justify-start items-start gap-3">
                          <div className="self-stretch flex flex-col justify-start items-start">
                            <div className="justify-start text-blue-600 text-base font-semibold leading-6">
                              {item.price}
                            </div>
                            
                            {/* Star Ratings */}
                            <div className="inline-flex justify-start items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="flex items-center space-x-1">
                                  {i < item.rating ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                                    </svg>
                                  ) : (
                                    <svg
                                      width="11"
                                      height="11"
                                      viewBox="0 0 11 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="fill-stone-300"
                                    >
                                      <path
                                        d="M4.81257 0.345156C5.02852 -0.114926 5.68291 -0.114926 5.89886 0.345156L7.07378 2.84832C7.1588 3.02945 7.32851 3.15628 7.5263 3.1865L10.2014 3.59522C10.6842 3.66898 10.8813 4.2578 10.5403 4.60735L8.56718 6.62961C8.43419 6.76591 8.37381 6.95726 8.40446 7.14521L8.865 9.96852C8.94563 10.4628 8.42089 10.8325 7.98255 10.5902L5.64599 9.2986C5.46535 9.19875 5.24607 9.19875 5.06544 9.2986L2.72888 10.5902C2.29054 10.8325 1.76579 10.4628 1.84643 9.96852L2.30696 7.14521C2.33762 6.95726 2.27723 6.76591 2.14424 6.62961L0.171159 4.60735C-0.169888 4.2578 0.0272343 3.66898 0.509993 3.59522L3.18512 3.1865C3.38292 3.15628 3.55263 3.02945 3.63765 2.84832L4.81257 0.345156Z"
                                        fill="#D6D3D1"
                                      />
                                    </svg>
                                  )}
                                </div>
                              ))}
                              <div className="justify-start text-stone-500 text-xs font-normal">
                                ({item.reviews})
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch justify-start text-stone-800 text-3xl font-semibold line-clamp-2">
                            {item.title}
                          </div>
                        </div>

                        {/* Shop Now Button */}
                        <button className={`px-4 py-2 ${item.colors[3] || 'bg-blue-600'} rounded-xl outline outline-1 outline-offset-[-1px] ${item.colors[2]} inline-flex justify-center items-center gap-2 hover:opacity-90 transition-opacity`}>
                          <div className="justify-start text-white text-sm font-medium leading-5">
                            Shop Now
                          </div>
                          <div className="w-5 h-5 relative overflow-hidden">
                            <div className="w-3 h-3">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M4.16666 9.99984H15.8333M15.8333 9.99984L9.99999 4.1665M15.8333 9.99984L9.99999 15.8332"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>

                      {/* Product Image */}
                      <img
                        className="w-80 h-80 rounded-xl object-contain"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            {/* These are placed absolutely relative to the container */}
            <div className="custom-swipper-btn-wrapper flex items-center justify-between">
              <button className="custom-prev absolute z-50 right-[50%] lg:right-[96%] lg:top-[60%] lg:z-[999] cursor-pointer p-3.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-100 inline-flex justify-center items-center gap-2 hover:bg-stone-50 transition-colors shadow-sm">
                <div className="w-5 h-5 relative overflow-hidden">
                  <div className="w-3.5 h-2.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6667 10H3.33333M3.33333 10L8.33333 15M3.33333 10L8.33333 5" stroke="#57534D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </button>
              
              <button className="custom-next absolute z-50 left-[52%] lg:absolute lg:left-[96%] lg:top-[60%] lg:z-[999] cursor-pointer p-3.5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-100 inline-flex justify-center items-center gap-2 hover:bg-stone-50 transition-colors shadow-sm">
                <div className="w-5 h-5 relative overflow-hidden">
                  <div className="w-3.5 h-2.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16666 10H17.5M17.5 10L12.5 15M17.5 10L12.5 5" stroke="#57534D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HotDeals;