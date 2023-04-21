import React from 'react'
import { MotionDiv } from './MotionDiv'

const Banner = () => {
  return (
    <div className="w-5/6 mx-auto sm:flex justify-between">
        <MotionDiv duration={0.5} x={-100} className="mb-2">
        <h1 className="text-6xl sm:text-7xl font-bold mb-2">Cam's<br /> Weekly Blog</h1>
        <p>Follow the journey of a small dev surfing the world wide web</p>
        </MotionDiv>
        <MotionDiv duration={0.7} x={100} className="sm:ml-2 max-w-xs sm:max-w-sm text-gray-200 sm:mt-5">Launch into Cyberspace | Testing the latest technologies | Eat, Sleep, Code, Repeat </MotionDiv>
    </div>
  )
}

export default Banner