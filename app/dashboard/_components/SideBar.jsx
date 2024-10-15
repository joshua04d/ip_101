"use client";

import React from "react";
import Image from "next/image";
import {
  HiOutlineHome,
  HiOutlineSquare3Stack3D,
  HiOutlineShieldCheck,
  HiPower,
} from "react-icons/hi2";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress"


function SideBar() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiPower />,
      path: "/dashboard/logout",
    },
  ];

  const path = usePathname();
  console.log("Current path:", path); // Log the current path

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-2xl ">
      <div className="flex justify-center mb-5">
        <Image src={"/logo.svg"} width={100} height={100} alt="Logo" />
      </div>
      <hr className="my-5" />

      <ul className="space-y-4">
    {Menu.map((item) => (
        <Link href={item.path} key={item.id}>
            <li
                className={`flex items-center space-x-2 cursor-pointer p-2 rounded-lg transition-all duration-300 ease-in-out 
                            ${item.path === path ? "bg-blue-900 text-white" : "hover:bg-blue-600 hover:text-white"}`}
            >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
            </li>
        </Link>
    ))}
</ul>

<div className='absolute bottom-9 w-[80%]'> 
  <Progress value={33} />
  <h2 className='text-sm my-2'>3 out of 5 Course created </h2>
  <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimited courses</h2>
</div>

    </div>
  );
}

export default SideBar;
