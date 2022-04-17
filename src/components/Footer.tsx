import React from 'react';

const Footer = () => {
   return (
      <footer
         className="px-4 min-h-[320px] relative py-7 text-white"
         style={{ backgroundImage: 'url("src/images/img-19.jpg")' }}
      >
         <div className="absolute inset-0 bg-black/50"></div>
         <div className="relative  flex justify-between flex-col md:flex-row items-center">
            <div className="w-[30%]">
               <h1 className="font-black text-2xl text-center mb-7">Logo</h1>
            </div>
            <div className="flex  w-full md:flex-row flex-col items-center md:items-start text-center md:text-left gap-y-4">
               <div className="w-full">
                  <h4 className="text-xl font-medium mb-3">Về chúng tôi</h4>
                  <ul>
                     <li>Giới thiệu</li>
                     <li>Tin tức</li>
                     <li>Văn bản pháp luật</li>
                  </ul>
               </div>
               <div className="w-full">
                  <h4 className="text-xl font-medium mb-3">Du lịch</h4>
                  <ul>
                     <li>3 ngày 2 đêm</li>
                     <li>2 Ngày 1 đêm</li>
                     <li>Tuyến điểm</li>
                  </ul>
               </div>
               <div className="w-full">
                  <h4 className="text-xl font-medium mb-3">Chính sách</h4>
                  <ul>
                     <li>Hỗ trợ khác hàng</li>
                  </ul>
               </div>
            </div>
            <div></div>
         </div>
      </footer>
   );
};

export default Footer;
