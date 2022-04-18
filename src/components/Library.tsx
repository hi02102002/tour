import React from 'react';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img13 from '../images/img-13.jpg';
import img14 from '../images/img-14.jpg';
import img15 from '../images/img-15.jpg';
import img16 from '../images/img-16.jpg';
import img17 from '../images/img-17.jpg';
import img18 from '../images/img-18.jpg';
const IMGS = [img13, img14, img15, img16, img17, img18];

const Library = () => {
   return (
      <div className="px-4">
         <h3 className="text-center lg:text-4xl text-3xl  font-extrabold text-[#333] mb-8">
            Thư viện hình ảnh
         </h3>
         <div>
            <Swiper
               slidesPerView={1}
               spaceBetween={16}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Autoplay]}
               className="mySwiper pb-10"
               loop={true}
               autoplay={{
                  delay: 1000,
               }}
               speed={800}
               breakpoints={{
                  320: {
                     slidesPerView: 2,
                  },
                  480: {
                     slidesPerView: 3,
                  },
                  768: {
                     slidesPerView: 4,
                  },

                  1024: {
                     slidesPerView: 6,
                  },
               }}
            >
               {IMGS.map((img) => (
                  <SwiperSlide key={img} className="w-full">
                     <div className="flex flex-col gap-y-2 items-center bg-white">
                        <div className="relative pb-[100%] w-full rounded overflow-hidden">
                           <div className="absolute inset-0 w-full h-full">
                              <img
                                 src={img}
                                 alt=""
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Library;
