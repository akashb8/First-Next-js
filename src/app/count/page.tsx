"use client"
import React, { useState } from 'react'
import Link from 'next/link'
const Count: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return (
    <>
    <div className= "flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className= "text-4xl font-bold ">Count: {count}</h1>
      <button onClick={increment} className= "text-2xl text-black font-bold mt-4 bg-white px-4 py-2 rounded-md hover:text-blue-500">Increment</button>
      <button onClick={decrement} className= "text-2xl text-black font-bold mt-4 bg-white px-4 py-2 rounded-md hover:text-blue-500">Decrement</button>
    </div>
    <Link href="/" className= "text-2xl text-black font-bold mt-4 bg-white px-4 py-2 rounded-md hover:text-blue-500">Click here to redirect to home</Link>
    </>
  )
}

export default Count