"use client"
import React from "react";
import { Menu, Moon, Search, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
            <div className="flex items-center gap-8">

                <button

                >
                    <Menu className="h-8 w-8 dark:text-white" />
                </button>

                <div className="relative flex h-min w-[200px]">
                    <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
                    <input
                        className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
                        type="search"
                        placeholder="Search..."
                    />
                </div>
            </div>

            {/* Icons */}
            <div className="flex items-center">
                <button

                    className={
                        `rounded p-2 hover:bg-gray-100`
                    }
                >

                    <Sun className="h-6 w-6 cursor-pointer dark:text-white" />

                </button>
                <Link
                    href="/settings"
                    className={

                        `h-min w-min rounded p-2 hover:bg-gray-100`
                    }
                >
                    <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
                </Link>
                <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
                <div className="hidden items-center justify-between md:flex">
                    <div className="align-center flex h-9 w-9 justify-center">
                        <Image
                            src=""
                            alt={"User Profile Picture"}
                            width={100}
                            height={50}
                            className="h-full rounded-full object-cover"
                        />

                    </div>
                    <span className="mx-3 text-gray-800 dark:text-white">
                    </span>
                    <button
                        className="hidden rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 md:block"
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;