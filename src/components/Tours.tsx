import React from 'react';
import img10 from '../images/img-10.jpg';
import img11 from '../images/img-11.jpg';
import img12 from '../images/img-12.jpg';
import img7 from '../images/img-7.jpg';
import img8 from '../images/img-8.jpg';
import img9 from '../images/img-9.jpg';

const SLIDES: {
   img: string;
   title: string;
}[] = [
   {
      img: img7,
      title: '2 Ngày 1 đêm',
   },
   {
      img: img8,
      title: '2 Ngày 1 đêm',
   },
   {
      img: img9,
      title: '2 Ngày 1 đêm',
   },
   {
      img: img10,
      title: '2 Ngày 1 đêm',
   },
   {
      img: img11,
      title: '2 Ngày 1 đêm',
   },
   {
      img: img12,
      title: '2 Ngày 1 đêm',
   },
];

const Tours = () => {
   return (
      <div className="px-4">
         <h3 className="text-center lg:text-4xl text-3xl  font-extrabold text-[#333] mb-8">
            Tours
         </h3>
         <div>
            <ul className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-6  gap-4 ">
               {SLIDES.map((slide) => (
                  <li key={slide.img} className="w-full">
                     <div className="flex flex-col gap-y-2 items-center bg-white">
                        <div className="relative pb-[100%] w-full rounded overflow-hidden">
                           <div className="absolute inset-0 w-full h-full">
                              <img
                                 src={slide.img}
                                 alt=""
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        </div>
                        <div>
                           <h4 className="text-center font-bold text-[#333]">
                              {slide.title}
                           </h4>
                        </div>
                        <button className="rounded h-10 bg-[#70BB3E] w-full font-medium text-white">
                           Đặt tour
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Tours;
