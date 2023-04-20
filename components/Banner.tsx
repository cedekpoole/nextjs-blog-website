import React from 'react'

const Banner = () => {
  return (
    <div className="w-5/6 mx-auto sm:flex justify-between">
        <div className="mb-2">
        <h1 className="text-6xl sm:text-7xl font-bold mb-2">Cam's<br /> Weekly Blog</h1>
        <p className="">Follow the journey of a small dev surfing the world wide web</p>
        </div>
        <div className="sm:ml-2 max-w-xs sm:max-w-sm text-gray-200 sm:mt-5">Launch into Cyberspace | Testing the latest technologies | Eat, Sleep, Code, Repeat </div>
    </div>
  )
}

export default Banner