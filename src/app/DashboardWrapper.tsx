"use client"
import React from 'react'
import Navbar from "@/app/(components)/Navbar/index"




const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
            <main
                className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg "md:pl-64"
                    }`}
            >
                <Navbar />
            </main>
        </div>
    );

}

export default DashboardWrapper