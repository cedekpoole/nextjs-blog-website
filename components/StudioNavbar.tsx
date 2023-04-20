import React from 'react'
import Link from 'next/link'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'

function StudioNavbar(props: any) {
  return (
    <div className="bg-[#1a1a1a]" >
        <div className="flex items-center justify-space-between">
            <Link className="text-red-300 flex items-center p-4 text-lg" href="/">
                <ArrowSmallLeftIcon className="w-6 h-6 mr-2" />
                Go to website
            </Link>
        </div>
        <>{props.renderDefault()}</>
    </div>
  )
}

export default StudioNavbar