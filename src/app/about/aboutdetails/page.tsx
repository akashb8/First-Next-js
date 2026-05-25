"use client";
import React from "react";
import Link from "next/link";
const pagedetails = () => {
  return (
    <>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-4xl font-bold text-center mt-8 text-white-500">This is About Details</h1>
        <Link
          href="/about/aboutmember"
          className="text-2xl text-black font-bold mt-4 bg-white px-4 py-2 rounded-md hover:text-blue-500"
        >
          Click here to redirect to About Member
        </Link>
    </div>
    </>
  );
};

export default pagedetails;
