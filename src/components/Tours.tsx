import React from 'react';

const SLIDES: {
   img: string;
   title: string;
}[] = [
   {
      img: 'src/images/img-7.jpg',
      title: '2 Ngày 1 đêm',
   },
   {
      img: 'src/images/img-8.jpg',
      title: '2 Ngày 1 đêm',
   },
   {
      img: 'src/images/img-10.jpg',
      title: '2 Ngày 1 đêm',
   },
   {
      img: 'src/images/img-9.jpg',
      title: '2 Ngày 1 đêm',
   },
   {
      img: 'src/images/img-11.jpg',
      title: '2 Ngày 1 đêm',
   },
   {
      img: 'src/images/img-12.jpg',
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
