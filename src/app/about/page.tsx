"use client";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className="text-4xl font-bold ">This is about</h1>
        <Link
          href="/"
          className="text-2xl text-black font-bold mt-4 bg-white px-4 py-2 rounded-md hover:text-blue-500"
        >
          Click here to redirect to home
        </Link>
        <Link
          href="/about/aboutdetails"
          className="text-2xl text-black font-bold mt-4 bg-white px-4 py-2 rounded-md hover:text-blue-500"
        >
          Click here to redirect to about details
        </Link>
      </div>
    </>
  );
};

export default About;
