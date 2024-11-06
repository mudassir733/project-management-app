import React from 'react'
import {
    AlertCircle,
    AlertOctagon,
    AlertTriangle,
    Briefcase,
    ChevronDown,
    ChevronUp,
    Home,
    Layers3,
    LockIcon,
    LucideIcon,
    Search,
    Settings,
    ShieldAlert,
    User,
    Users,
    X,
} from "lucide-react";



const Sidebar = () => {


    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
    transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
 w-64
  `;
    return (
        <div className={sidebarClassNames}>
            <div className="flex h-[100%] w-full flex-col justify-start">
                {/* TOP LOGO */}
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        EDLIST
                    </div>

                    <button
                        className="py-3"

                    >
                        <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white" />
                    </button>

                </div>
                {/* TEAM */}
                <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                    {/* <Image
                src=""
                alt="Logo"
                width={40}
                height={40}
              /> */}
                    <div>
                        <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
                            EDROH TEAM
                        </h3>
                        <div className="mt-1 flex items-start gap-2">
                            <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
                            <p className="text-xs text-gray-500">Private</p>
                        </div>
                    </div>
                </div>
                {/* NAVBAR LINKS */}
                <nav className="z-10 w-full">
                    {/* <SidebarLink icon={Home} label="Home" href="/" />
              <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
              <SidebarLink icon={Search} label="Search" href="/search" />
              <SidebarLink icon={Settings} label="Settings" href="/settings" />
              <SidebarLink icon={User} label="Users" href="/users" />
              <SidebarLink icon={Users} label="Teams" href="/teams" /> */}
                </nav>

                {/* PROJECTS LINKS */}
                <button
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                >
                    <span className="">Projects</span>
                    <ChevronUp className="h-5 w-5" />

                    <ChevronDown className="h-5 w-5" />

                </button>
                {/* PROJECTS LIST */}


                {/* <SidebarLink
                  key={project.id}
                  icon={Briefcase}
                  label={project.name}
                  href={`/projects/${project.id}`}
                /> */}

                {/* PRIORITIES LINKS */}
                <button

                    className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                >
                    <span className="">Priority</span>

                    <ChevronUp className="h-5 w-5" />

                    <ChevronDown className="h-5 w-5" />

                </button>

                {/* <>
                <SidebarLink
                  icon={AlertCircle}
                  label="Urgent"
                  href="/priority/urgent"
                />
                <SidebarLink
                  icon={ShieldAlert}
                  label="High"
                  href="/priority/high"
                />
                <SidebarLink
                  icon={AlertTriangle}
                  label="Medium"
                  href="/priority/medium"
                />
                <SidebarLink icon={AlertOctagon} label="Low" href="/priority/low" />
                <SidebarLink
                  icon={Layers3}
                  label="Backlog"
                  href="/priority/backlog"
                />
              </> */}

            </div>
            <div className="z-10 mt-32 flex w-full flex-col items-center gap-4 bg-white px-8 py-4 dark:bg-black md:hidden">
                <div className="flex w-full items-center">
                    <div className="align-center flex h-9 w-9 justify-center">

                        {/* <Image
                    src={`https://pm-s3-images.s3.us-east-2.amazonaws.com/${currentUserDetails?.profilePictureUrl}`}
                    alt={currentUserDetails?.username || "User Profile Picture"}
                    width={100}
                    height={50}
                    className="h-full rounded-full object-cover"
                  /> */}

                        <User className="h-6 w-6 cursor-pointer self-center rounded-full dark:text-white" />

                    </div>
                    <span className="mx-3 text-gray-800 dark:text-white">

                    </span>
                    <button
                        className="self-start rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 md:block"

                    >
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar