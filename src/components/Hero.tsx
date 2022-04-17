import React, { useEffect, useState } from 'react';

const imgs = [
   'src/images/img-2.jpg',
   'src/images/img-3.jpg',
   'src/images/img-4.jpg',
   'src/images/img-5.jpg',
];

const Hero = () => {
   const [slide, setSlide] = useState<{
      currentIndex: number;
   }>({
      currentIndex: 0,
   });

   useEffect(() => {
      const timer = setInterval(() => {
         setSlide((value) => {
            if (value.currentIndex >= imgs.length - 1) {
               return {
                  currentIndex: 0,
               };
            }
            return {
               currentIndex: value.currentIndex + 1,
            };
         });
      }, 2000);

      return () => {
         clearInterval(timer);
      };
   });

   return (
      <section
         className="h-[calc(100vh_-_56px)] bg-cover bg-center transition-[background-image] flex items-center justify-center relative px-4"
         style={{
            backgroundImage: `url('${imgs[slide.currentIndex]}')`,
         }}
      >
         {' '}
         <div className="absolute inset-0 bg-black/25"></div>
         <div className="max-w-2xl">
            <h3
               className="md:text-7xl text-4xl font-black text-white text-center leading-normal relative z-10"
               style={{
                  textShadow: '0px 11.7857px 3.92856px rgba(0, 0, 0, 0.25)',
               }}
            >
               {'Vườn quốc gia'} <br /> {'U Minh Thượng'}
            </h3>
         </div>
      </section>
   );
};

export default Hero;
