import React, { useEffect, useState } from "react";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex items-center ">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6 cursor-pointer" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt="account-image"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
