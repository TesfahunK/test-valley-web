import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { GoBell, GoSearch } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-white w-full shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex space-x-1 items-center">
            <NextLink href="/">
              <Image
                src="https://www.testvalley.kr/logo/logo-mobile-new.svg"
                sizes="100vw"
                width={0}
                height={0}
                alt="Logo"
                className="w-[120px] h-auto"
              />
            </NextLink>
            <RxHamburgerMenu className="hidden md:block" color="#00d093" />
          </div>

          <div className="relative min-w-3 hidden md:block ">
            <input
              className="shadow-sm border rounded-[3px] pl-10 py-2  px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="search"
              placeholder="살까말까 고민된다면 검색해보세요!"
            />
            <div
              className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
            >
              <CiSearch />
            </div>
          </div>

          <div className="hidden  md:block">
            <div className="flex space-x-3 items-center">
              <Image
                src="https://www.testvalley.kr/common/home-event.svg"
                sizes="100vw"
                width={0}
                height={0}
                alt="DownHome"
                className="w-[30px] h-auto"
              />
              <div className="w-[1px] h-[15px] bg-gray-300"></div>

              <div className="text-black-300 hover:text-[#33774E] px-3 py-2 rounded-md text-sm font-thin">
                로그인 / 회원가입
              </div>
            </div>
          </div>

          <div className="block md:hidden flex items-center space-x-3 ">
            <GoSearch size={25} />
            <GoBell size={25} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
