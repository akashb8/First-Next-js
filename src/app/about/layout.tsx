import React from 'react'


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        {children}
        <h2 className='text-2xl font-bold text-center mt-8 text-green-400'>This is the parent about layout</h2>
    </>
  )
}

export default layout