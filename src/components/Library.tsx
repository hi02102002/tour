import React from 'react';

const IMGS = [
   'src/images/img-13.jpg',
   'src/images/img-14.jpg',
   'src/images/img-15.jpg',
   'src/images/img-16.jpg',
   'src/images/img-17.jpg',
   'src/images/img-18.jpg',
];

const Library = () => {
   return (
      <div className="px-4">
         <h3 className="text-center lg:text-4xl text-3xl  font-extrabold text-[#333] mb-8">
            Thư viện hình ảnh
         </h3>
         <div>
            <ul className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-6  gap-4 ">
               {IMGS.map((img) => (
                  <li key={img} className="w-full">
                     <div className="flex flex-col gap-y-2 items-center bg-white">
                        <div className="relative pb-[133.333%] w-full rounded overflow-hidden">
                           <div className="absolute inset-0 w-full h-full">
                              <img
                                 src={img}
                                 alt=""
                                 className="w-full h-full object-cover"
                              />
                           </div>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Library;