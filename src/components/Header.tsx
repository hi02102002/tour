import React, { useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useOnClickOutside } from '../hooks/useClickOutSide';
export const NAV = [
   {
      path: '/',
      name: 'Trang chủ',
   },
   {
      path: '/',
      name: 'Giới thiệu',
   },
   {
      path: '/',
      name: 'Tin tức',
   },
   {
      path: '/',
      name: 'Thông tin du lịch',
   },
   {
      path: '/',
      name: 'Tour',
   },
   {
      path: '/',
      name: 'Đa phương tiện',
   },
];

const Header = () => {
   const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false);
   const sidebarRef = useRef<HTMLElement | null>(null);

   useOnClickOutside(sidebarRef, () => {
      setIsShowSidebar(false);
   });

   return (
      <header className="h-14 flex items-center  text-[#333]">
         <div className="px-4 w-full">
            <div className="flex items-center justify-between ">
               <h1 className="font-black text-2xl">Logo</h1>
               <nav
                  className={`fixed h-screen w-80 md:w-[unset] md:h-[unset] left-0 bottom-0 top-0 md:block md:relative z-50 bg-white p-4 pt-0 md:p-0  md:translate-x-[unset] ${
                     !isShowSidebar && 'translate-x-[-100%]'
                  } transition-all shadow-sm md:shadow-none`}
                  ref={sidebarRef}
               >
                  <h1 className="font-black text-2xl h-[56px] text-center md:hidden flex items-center justify-center">
                     Logo
                  </h1>
                  <ul className="flex items-center md:flex-row flex-col  gap-y-4 md:gap-y-0 ">
                     {NAV.map((item) => {
                        return (
                           <li key={item.name} className=" mr-4 last:mr-0 ">
                              <a
                                 href={item.path}
                                 onClick={(e) => {
                                    e.preventDefault();
                                 }}
                                 className="font-medium"
                              >
                                 {item.name}
                              </a>
                           </li>
                        );
                     })}
                  </ul>
               </nav>
               <button
                  className="md:hidden"
                  onClick={() => {
                     setIsShowSidebar(!isShowSidebar);
                  }}
               >
                  <AiOutlineMenu />
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
