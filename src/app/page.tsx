"use client";
import Link from "next/link";
const Home: React.FC = () => {
  return (
    <>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className= "text-4xl font-bold ">Hi, I&apos;m Akash Bhattacharyya</h1>
      <Link href="/about" className= "text-2xl text-black font-bold mt-4 bg-white px-4 py-2 rounded-md hover:text-blue-500">Click here to redirect to about</Link>
    </div>
    </>
  );
}
export default Home;